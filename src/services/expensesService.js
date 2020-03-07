const expenseDao = require("../daos/expensesDao");

const service = {
    getExpenses: async() => {
        return expenseDao.getExpenses();
    },
    getExpensesByDate: async(date) => {
        return expenseDao.getExpensesByDate(date);
    },
    createExpense: async(formData) => {
        return expenseDao.createExpense(formData);
    },
}

module.exports = service;