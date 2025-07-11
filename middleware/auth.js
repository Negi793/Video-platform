const mongoose = require('mongoose');

const videoViewSchema = new mongoose.Schema({
  videoId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  count: { type: Number, default: 1 },
  lastViewed: Date
});

module.exports = mongoose.model('VideoView', videoViewSchema);
