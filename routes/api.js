const router = require("express").Router();
const Racer = require('../models/racer.js');

router.post("/api/racer", function (req, res) {
    Racer.create(req.body).then((doc) => {
        res.json(doc);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/api/racer', function (req, res) {
    Racer.find(req.body).then((docs) => {
        res.json(docs);
    });
});

router.get('/api/racer/:id', function (req, res) {
    Racer.findOne({
        _id: req.params.id
    }).then(docs => {
        res.json(docs);
    });
});

module.exports = router;