module.exports = (app, mongoData) => {
	app.get('/', (req, res) => {
		const expensesDao = require('../daos/expensesDao')(mongoData);
		const expensesService = require('../services/expensesService')(expensesDao);
		const expensesController = require('../controllers/expensesController')(expensesService);
		expensesController.loadExpenses().lean().exec(function (err, data) {
			return res.end(JSON.stringify(data));
		});
	});
	app.listen(3001, () => {
		console.log('ready to go');
	});
}