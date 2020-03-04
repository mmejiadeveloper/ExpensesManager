const express = require("express");
const router = express.Router();
const expense = require("../controllers/expensesController.js");

router.get('/', (req, res) => {
    res.render('index');
});
router.get("/expenses", expense.getExpenses);
router.get("/expenses/:date", expense.getExpensesByDate);

module.exports = router;