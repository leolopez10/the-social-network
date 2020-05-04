require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API Running'))

// Defining Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


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