module.exports = (expensesDao) => {
	return {
		loadExpenses: () => {
			return expensesDao.getAllExpenses();
		}
	}
}