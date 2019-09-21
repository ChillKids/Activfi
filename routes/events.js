var express = require('express');
var router = express.Router();
const {
    getEvents,
    getEventWith
} = require('../controllers/EventsController');
/* GET events listing. */
router.get('/', (req, res) => {
    getEvents((err, resp) => {
        if (err) {
            res.send(err)
        } else {
            res.send(resp)
        }
    })
});
router.get('/:id', (req, res) => {
    getEventWith(req.params.id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp)
        }
    })
})
module.exports = router;