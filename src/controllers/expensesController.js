const expensesService = require("../services/expensesService");

let controller = {};
controller.getExpenses = async(req, res) => {
    const expenses = await expensesService.getExpenses();
    res.json({ data: expenses });
};
controller.getExpensesByDate = async(req, res) => {
    const expenses = await expensesService.getExpensesByDate(req.params.date);
    res.json({ data: expenses });
};

module.exports = controller;