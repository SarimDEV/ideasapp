const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');


//Routers
const entries = require('./routes/entries');


//Setting up mongoose
const dbURL = require('./config/keys').mongoURI;
mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successful entered the mainframe'));


app.use(morgan('dev'));
app.use(express.json());


//API requests
app.use('/entries', entries);

//production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Ideas app running on port: ${PORT}`))
