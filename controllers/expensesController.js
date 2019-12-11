module.exports = (expensesService) => {
	// console.log(expensesService);
	return {
		loadExpenses : () => {
			return expensesService.loadExpenses();
		}
	}
}