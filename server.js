const express = require('express');
const eventRoutes = require('./src/events/routes');
const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.use('/api/v1/events', eventRoutes);

app.listen(port, () => console.log('App listening on port ' + port));