const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = Schema({
	reason: String,
	amount: Number,
	date: Date,
	source: {
		type: String,
		enum: ['Debito', 'Credito', 'Efectivo']
	}
});
module.exports = mongoose.model('Author', expenseSchema);
