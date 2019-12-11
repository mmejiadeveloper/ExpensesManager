module.exports = (expenseModel) => {
	return {
		save: () => {
			const testExpense = new expenseModel({
				reason: 'reason for test'
			});
			testExpense.save((err) => {
				if (err) {
					console.log(err);
					return;
				}
				console.log('saved');
			});
		}
	}
}