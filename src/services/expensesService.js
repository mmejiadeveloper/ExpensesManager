const expenseDao = require("../daos/expensesDao");

const service = {
	getExpenses: async ()=>{
		return expenseDao.getExpenses();
	}
}

module.exports = service;