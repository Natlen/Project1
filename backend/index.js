const express = require('express');
const api = require('./routes/api');
const app = express();
const path = require('path')
const cors = require('cors');
const port = 3000
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('main page')
})
app.use('/api', api);
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(`http://localhost:${port}/api`);
})