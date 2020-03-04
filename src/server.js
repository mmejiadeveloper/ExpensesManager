const mongoData = require('./config/mongo');
const express = require('express');
const app = express();
const routes = require('./api/routes');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.listen(3003);
app.use(routes);