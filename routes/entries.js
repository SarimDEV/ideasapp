const express = require('express');
const router = express.Router();
const secretCode = require('../config/keys').secretKey;

const Entry = require('../models/Entry');

router.get('/', (req, res) => {
    Entry.find()
        .sort({ date: -1 })
        .then(entry => res.json(entry))
        .catch(err => console.log(err))
});


router.post('/', (req, res) => {
    if (req.body.specialCode === secretCode) {
        const newEntry = new Entry({
            author: req.body.author,
            title: req.body.title,
            body: req.body.body,
            likes_count: req.body.likes_count
        });
        newEntry.save().then(entry => res.json(entry));
    }
    else {
        res.status(400).json({ msg: "Unsuccessful, please type the hidden code!" })
    }
});

router.delete('/:id', (req, res) => {
    Entry.findById(req.params.id)
        .then(entry => entry.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
});
//Like button, not useful rn lmaoo
router.post('/:id/like', (req, res) => {
    Entry.findOneAndUpdate(req.params.id, { $inc: { likes_count: 1 } }).then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
});


module.exports = router;