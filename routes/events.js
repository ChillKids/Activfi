var express = require('express');
var router = express.Router();
const {
    getEvents,
    getEventWith,
    createEvent,
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

/* GET event by id. */
router.get('/:id', (req, res) => {
    getEventWith(req.params.id, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp)
        }
    })
})

/* POST event with parameters. */
router.post('/', (req, res) => {
    createEvent(req.params, (err, resp) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resp);
        }
    });
});

module.exports = router;