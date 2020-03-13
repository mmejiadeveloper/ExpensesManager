const expenseDao = require("../daos/expensesDao");

const service = {
    getExpenses: async() => {
        const expenses = await expenseDao.getExpenses();
        return {
            expenses,
            totalCost: service.getTotalExpenses(expenses).expenses,
            totalIncomes: service.getTotalExpenses(expenses).incomes,
            saves: service.getTotalExpenses(expenses).saves
        }
    },
    getExpensesByDate: async(date) => {
        const expenses = await expenseDao.getExpensesByDate(date);
        const balances = await expenseDao.getBalances();

        return {
            expenses,
            totalCost: service.getTotalExpenses(expenses).expenses,
            totalIncomes: service.getTotalExpenses(expenses).incomes,
            saves: service.getTotalExpenses(expenses).saves
        }
    },
    createExpense: async(formData) => {
        return expenseDao.createExpense(formData);
    },
    getTotalExpenses: (expenses) => {
        const totalExpenses = expenses.filter(({ type }) => type === 'expense').reduce((acc, obj) => { return acc + obj.cost }, 0);
        const totalIncomes = expenses.filter(({ type }) => type === 'income').reduce((acc, obj) => { return acc + obj.cost }, 0);
        return {
            "incomes": new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(totalIncomes),
            "expenses": new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(totalExpenses),
            "saves": new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(totalIncomes - totalExpenses),
        }
    }
}

module.exports = service;