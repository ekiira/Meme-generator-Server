const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    caption: String,
    imageUrl: String,
    imageUpload: String
});

module.exports = mongoose.model('Meme', memeSchema);