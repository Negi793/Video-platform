const express = require('express');
const app = express();
const upload = require('./upload/upload');  // ✅ fixed path
const path = require('path');
const mongoose = require('mongoose');
const Video = require('./models/Video');

// Middleware to parse form-data text fields (like "visibility")
app.use(express.urlencoded({ extended: true }));

// ✅ Connect to MongoDB
mongoose.connect('mongodb+srv://negi792003:Q8PSA7f6Pvhqhbab@cluster0.xvy4a8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
  console.log('✅ Connected to MongoDB Atlas');
}).catch((err) => {
  console.error('❌ MongoDB Atlas connection error:', err);
});;

// ✅ Upload route with visibility
app.post('/upload', upload.single('demo'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  console.log('Uploaded file:', req.file);  // ✅ Is line ko ADD karo

  const visibility = req.body.visibility || 'private';

  const video = new Video({
    filename: req.file.filename,
    originalName: req.file.originalname,
    visibility: visibility
  });

  await video.save();

  res.send(`Video saved with visibility: ${visibility}`);
});

// ✅ Stream video route
app.get('/stream/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'upload', req.params.filename);
  res.sendFile(filePath);
});

// ✅ Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
