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

app.use('/api/admin', require('./routes/admin'));
app.use('/api/admin/product', require('./routes/product'));

app.use('/api/user', require('./routes/user'));

app.listen(5000);
