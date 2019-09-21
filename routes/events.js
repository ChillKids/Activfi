var express = require('express');
var router = express.Router();
const {
    geocodeAddress
} = require('../apis/opencage');
const {
    getEvents,
    getEventWith,
    createEvent,
    deleteEvent
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
    geocodeAddress(req.body.event_location)
        .then(data => {
            let coordinates = data.results[0].geometry.lat + " " + data.results[0].geometry.lng;
            req.body.event_coordinates = coordinates;
            createEvent(req.body, (err, resp) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(resp);
                }
            });
        });
});
/* DELETE event with id */
router.delete('/:id', (req, res) => {
    deleteEvent(req.params.id, (err, resp) => {
        if (err) {
            res.status(400)
                .send(err)
        } else {
            res.status(200);
        }
    })
})
module.exports = router;