module.exports = (mongoData) => {
	const expensesModel = require('../models/expense')(mongoData);
	return {
		getAllExpenses: () => {
			return expensesModel.find();
		}
	}
}