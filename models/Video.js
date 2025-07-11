const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'private'
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Video', videoSchema);
