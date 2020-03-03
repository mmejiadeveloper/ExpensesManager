const mongoData = require('./config/mongo');
const express = require('express');
const app = express();
const routes = require('./api/routes');

app.listen(3003);
app.use(routes);
