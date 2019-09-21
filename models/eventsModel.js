const {
    Pool,
    Client
} = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool({
    host: 'localhost',
    database: 'myDb',
    port: 5432,
});

function selectAllEvents(callback) {
    pool.query('SELECT event_creator, event_name, event_description, event_location, event_date, created_at FROM events', (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res.rows);
        }
    })
}

function selectEvent(id, callback) {
    pool.query('SELECT event_creator, event_name, event_description, event_location, event_date, created_at FROM events WHERE event_id = $1', [id], (err, res) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, res.rows);
        }
    })
}

function insertEvent(eventObj, callback) {
    pool.query(`INSERT INTO events (event_creator, event_name, event_description, event_location, event_date, created_at) VALUES ('Jonathan ', 'Volleyball ', 'Come play volleyball with us!', 'Porter Park, Rexburg ID', now(), now()`, [], (err, res) => {
        if (err) {
            callback()
        }
    })
}
module.exports = {
    selectEvent: selectEvent,
    selectAllEvents: selectAllEvents
}