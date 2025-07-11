const express = require('express');
const router = express.Router();
const upload = require('../upload/upload'); // ✅ Correct path

// ✅ Paste this POST route:
router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // File info
    const videoPath = req.file.path;

    res.status(201).json({ message: 'Video uploaded successfully', path: videoPath });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed', error });
  }
});

module.exports = router;
