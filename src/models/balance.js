const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const balanceSchema = Schema({
    valuex: Number,
    date: Date,
    description: String
});
module.exports = mongoose.model('balance', balanceSchema);