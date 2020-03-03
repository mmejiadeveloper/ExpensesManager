const expensesModel = require("../models/expense");
const expensesService = require("../services/expensesService");

let controller = {};
controller.list = async (req, res) => {
	expensesModel.find({}).exec(function(err, data){
		if( err ){ console.log('Error: ', err); return; }
        res.json(data);
	});

	
	
	// expensesService.getExpenses().then( x=> {log} );
	// res.json(expensesService.getExpenses());
};

module.exports = controller;
