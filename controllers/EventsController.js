// Call the events models function
// 
const {
    selectAllEvents,
    selectEvent,
    insertEvent,
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

function deleteEvent(event) {}
module.exports = {
    getEvents: getEvents,
    getEventWith: getEventWith,
    createEvent: createEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent
}