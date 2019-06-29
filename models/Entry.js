const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes_count: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    },
    //ONLY FOR NOW CHANGE LATER
});

module.exports = Entry = mongoose.model('entry', EntrySchema);