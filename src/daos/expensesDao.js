const expensesModel = require("../models/expense");

const dao = {
    getExpenses: async() => {
        return new Promise((resolve, reject) => {
            expensesModel.find({}, { reason: 1, _id: 0, type: 1, cost: 1, date: 1 }).exec(function(err, data) {
                if (err) { reject(err) }
                resolve(data);
            });
        });
    },
    getExpensesByDate: async(date) => {
        console.log('date ', date);
        return;
        return new Promise((resolve, reject) => {
            expensesModel.find({}, { reason: 1, _id: 0, type: 1, cost: 1, date: 1 }).exec(function(err, data) {
                if (err) { reject(err) }
                resolve(data);
            });
        });
    },
}

module.exports = dao