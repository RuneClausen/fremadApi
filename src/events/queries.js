const getEvents = "SELECT * FROM events";
const getEventById = "SELECT * FROM events WHERE eventId = $1";
const addEvent = "INSERT INTO events (eventname) VALUES ($1)";
const checkEventExists = "SELECT e FROM events e WHERE e.eventname = $1";
const removeEvent = "DELETE FROM events WHERE eventid = $1";

module.exports = {
    getEvents,
    getEventById,
    addEvent,
    checkEventExists,
    removeEvent,
}