var mongoose = require('mongoose');
// var mongoDB = 'mongodb://127.0.0.1/gastos_manager';
var mongoDB = 'mongodb+srv://miguel:sa123456@devcluster-rcdse.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
	mongoInstance: mongoose,
	dbConnection: db,
}