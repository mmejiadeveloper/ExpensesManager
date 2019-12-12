module.exports = (expensesService) => {
	return {
		loadExpenses : () => {
			return expensesService.loadExpenses();
		}
	}
}