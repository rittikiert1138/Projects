const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./utils/database');
const app = express();

//Connect database
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));

app.listen(5000);
