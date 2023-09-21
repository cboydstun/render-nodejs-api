const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

require('dotenv').config();

const PORT = 8080 || process.env.PORT;

const people = [
    { name: 'John' },
    { name: 'Doe' },
    { name: 'Smith' },
    { name: 'Chris' },
    { name: 'Mark' },
    { name: 'Aydin' },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/people', (req, res) => {
    res.json(people);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});