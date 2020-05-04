require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Init Middleware
app.use(express.json({ extended: false }))


app.get('/', (req, res) => res.send('API Running'))

// API Routes
app.use(routes);

//Database Connection
mongoose.connect((process.env.MONGODB_URI || process.env.DATABASE), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(() => console.log("====================DATABASE CONNECTED===================="))
    .catch(error => console.log(error));

//Server Listening
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));