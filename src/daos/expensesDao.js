const expensesModel = require("../models/expense");

const dao = {
	getExpenses: async ()=>{
		return new Promise((resolve, reject)=>{
			expensesModel.find({}).exec(function(err, data){
				if( err ){ reject(err) }
			 	resolve(data);
			}); 
		});
	}
}

module.exports = dao