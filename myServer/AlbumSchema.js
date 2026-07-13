const mongoose = require('mongoose');
const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  camera: {
    body: { type: String },
    lens: { type: String },
  },
  coverImage: { type: String, required: true },
  images: [{ type: String }],
});

module.exports = mongoose.model('Album', albumSchema);