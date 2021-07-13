const express = require('express');
const api = require('./routes/api');
const app = express();
const cors = require('cors');
const port = 3000
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors);
app.use('/api', api);
app.get('/', (req, res) => {
    res.send("main")
})
app.listen(port, () => {
    console.log(`http://localhost:${port}/api`);
})