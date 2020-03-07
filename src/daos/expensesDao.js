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
        const month = parseInt(date.split('-')[0]);
        return new Promise((resolve, reject) => {
            expensesModel.find({ "$expr": { "$eq": [{ "$month": "$date" }, month] } }, { reason: 1, _id: 0, type: 1, cost: 1, date: 1 })
                .exec(function(err, data) {
                    if (err) { reject(err) }
                    resolve(data);
                });
        });
    },
    createExpense: async(formData) => {
        return new Promise((resolve, reject) => {
            formData.cost = parseInt(formData.cost)
            console.log(formData);
            expensesModel.create(formData, function(err, small) {
                if (err) return handleError(err);
                resolve({ status: 1 });
            });
        });
    },
}

module.exports = dao