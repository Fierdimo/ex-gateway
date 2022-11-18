const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config()

const usersRouter = require('./routes/users');
const authRouter = require('./routes/authentication')

const handleResponse = require('./middlewares/handleResponse');

const app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/user', usersRouter);
app.use('/auth', authRouter);

// middlewares
app.use(handleResponse)


module.exports = app;
