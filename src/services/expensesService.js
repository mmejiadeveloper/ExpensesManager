const expensesModel = require("../models/expense");

const service = {
	getExpenses: async ()=>{
		expensesModel.find({}).exec(function(err, data){
			if( err ){ console.log('Error: ', err); return; }
			return data;
		}); 
	}
}
module.exports = service;