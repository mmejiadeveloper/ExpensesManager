const mongoData = require('./config/mongo');
/* const expenseModel = require('./models/expense')(mongoData);
const functions = require('./models/expenseFunctions')(expenseModel); */
const express = require('express');
const app = express();
require('./api/routes')(app, mongoData);