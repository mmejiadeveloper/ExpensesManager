module.exports = (mongoData) => {
	var Schema = mongoData.mongoInstance.Schema;
	var expenseSchema = Schema({
		reason: String,
		amount: Number,
		date: Date,
		source: {
			type: String,
			enum: ['Debito', 'Credito', 'Efectivo']
		}
	});
	return mongoData.mongoInstance.model('Author', expenseSchema);
}