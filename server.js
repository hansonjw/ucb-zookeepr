// deployed site on heroku: https://pacific-island-81874.herokuapp.com/api/animals

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

const { animals } = require('./data/animals');



// common practive is to put this at the end, but it's not required
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
