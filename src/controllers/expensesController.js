// const expensesModel = require("../models/expense");
const expensesService = require("../services/expensesService");

let controller = {};
controller.list = async (req, res) => {
	const r = await expensesService.getExpenses();
	res.json(r);
	
	// expensesService.getExpenses().then(
	// 	(result)=>{
	// 		res.json(result);
	// 	}
	// );

	// expensesModel.find({}).exec(function(err, data){
	// 	if( err ){ console.log('Error: ', err); return; }
    //     res.json(data);
	// });

};

module.exports = controller;
