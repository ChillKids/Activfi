const {
    Pool,
    Client
} = require('pg')
// pools will use environment variables
// for connection information
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: connectionString
});

function selectAllEvents(callback) {
    pool.query('SELECT event_id, event_creator, event_name, event_description, event_location, event_date, created_at FROM events', (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res.rows);
        }
    })
}

function selectEvent(id, callback) {
    pool.query('SELECT event_id, event_creator, event_name, event_description, event_location, event_date, created_at FROM events WHERE event_id = $1', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res.rows);
        }
    })
}

function insertEvent(eventObj, callback) {
    const creater = eventObj.event_creator;
    const eventName = eventObj.event_name;
    const description = eventObj.event_description;
    const eventDate = eventObj.event_date;
    const location = eventObj.event_location;
    const createdAt = eventObj.event_date;
    pool.query(`INSERT INTO events (
        event_creator, 
        event_name, 
        event_description, 
        event_location, 
        event_date, 
        created_at) 
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [creater, eventName, description, location, eventDate, createdAt], (err, res) => {
            if (err) {
                callback(err);
            } else {
                callback(null, 201);
            }
        })
}
module.exports = {
    selectEvent: selectEvent,
    selectAllEvents: selectAllEvents,
    insertEvent: insertEvent
}