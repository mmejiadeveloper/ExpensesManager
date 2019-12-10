const mongoData = require('./config/mongo');
const expenseModel = require('./models/expense')(mongoData);
const testExpense = new expenseModel({
	reason: 'reason for test'
});
testExpense.save((err)=>{
	if (err) {
		console.log(err);
		return;
	}
	console.log('saved');
});
