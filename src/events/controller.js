const pool = require('../../db');
const queries = require('./queries');

const getEvents = (request, response) => {
    pool.query(queries.getEvents, (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows);
    });
};

const getEventById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(queries.getEventById, [id], (err, res) => {
        if (err) throw err;
        response.status(200).json(res.rows);
    });
};

const addEvent = (request, response) => {
    const { eventname } = request.body;

    pool.query(queries.checkEventExists, [eventname], (err, res) => {
        if (res.rows.length) {
            response.send("Event already exists");
        } else {
            pool.query(queries.addEvent, [eventname], (err, res) => {
                if (err) throw err;
                response.status(201).send("Event created!");
            });
        }
    });
}

const removeEventById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query(queries.getEventById, [id], (err, res) => {
        const noEventFound = !res.rows.length;
        if(noEventFound) {
            response.send("Event does not exist in DB, could not remove");
        } else {
            pool.query(queries.removeEvent, [id], (err, res) => {
                if (err) throw err;
                response.status(200).send("Event removed");
            })
        }
        response.status(200).send("Event deleted!");
    });
};


module.exports = {
    getEvents,
    getEventById,
    addEvent,
    removeEventById,
}