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
app.use('/api/cart', require('./routes/cart'));
app.use('/api/frontend', require('./routes/frontend'));

app.use('/apis/seller', require('./routes/seller'))

app.listen(5000);
