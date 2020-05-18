require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express).urlencoded({ extended: true });
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API Running'));

// Serve up static assets (for heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// API Routes
app.use(routes);

// Send every other request to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//Database Connection
mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() =>
    console.log('====================DATABASE CONNECTED====================')
  )
  .catch(error => console.log(error));

//Server Listening
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
