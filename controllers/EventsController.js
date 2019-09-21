// Call the events models function
// 
const {
    selectAllEvents,
    selectEvent,
    insertEvent,
    deleteEventWith
} = require('../models/eventsModel');
// Gets all the events from model
function getEvents(callback) {
    selectAllEvents(callback)
}
// Gets the event from the given id 
function getEventWith(id, callback) {
    selectEvent(id, callback);
}
// Creates and event
function createEvent(event, callback) {
    insertEvent(event, callback);
}

function updateEvent(event) {}

function deleteEvent(id, callback) {
    deleteEventWith(id, callback);
}
module.exports = {
    getEvents: getEvents,
    getEventWith: getEventWith,
    createEvent: createEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent
}