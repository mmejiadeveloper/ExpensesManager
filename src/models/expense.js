const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const expenseSchema = Schema({
    reason: String,
    cost: Number,
    date: Date,
    source: {
        type: String,
        enum: ['Debito', 'Credito', 'Efectivo']
    },
    type: String
});
module.exports = mongoose.model('Expenses', expenseSchema);