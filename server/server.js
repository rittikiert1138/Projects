const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./utils/database');
const cors = require('cors');
const app = express();

//Connect database
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/product', require('./routes/product'));

app.listen(5000);
