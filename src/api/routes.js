/* exports.assignRoutes = (app, mongoData) => {
	app.get('/', (req, res) => {
		const expensesDao = require('../daos/expensesDao')(mongoData);
		const expensesService = require('../services/expensesService')(expensesDao);
		const expensesController = require('../controllers/expensesController')(expensesService);
		expensesController.loadExpenses().lean().exec(function (err, data) {
			return res.end(JSON.stringify(data));
		});
	});
}
 */

const express = require('express');
const router = express.Router();

const expense = require('../controllers/expensesController.js');

router.get('/', expense.list);
/* router.get('/show/:id', product.show);
router.get('/create', product.create);
router.post('/save', product.save);
router.get('/edit/:id', product.edit);
router.post('/update/:id', product.update);
router.post('/delete/:id', product.delete); */

module.exports = router;
