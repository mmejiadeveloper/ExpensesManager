module.exports = (mongoData) => {
	const expensesModel = require('../models/expense')(mongoData);
	// console.log(expensesModel());
	
	return {
		getAllExpenses: () => {
			return expensesModel.find();
		}
	}
}