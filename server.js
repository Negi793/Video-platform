const mongoose = require('mongoose');
const express = require('express');
const app = express();
const upload = require('./upload');  // Multer config
const Video = require('./models/Video');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/videoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware to parse JSON (in case you send raw body)
app.use(express.json());

app.post('/upload', upload.single('demo'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded');

  const visibility = req.body.visibility || 'private';

  const video = new Video({
    filename: req.file.filename,
    originalName: req.file.originalname,
    visibility: visibility
  });

  try {
    await video.save();
    res.send(`Video saved with visibility: ${visibility}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving video');
  }
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
