const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var todoListSchema = new Schema({
	content: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	isFinish: {
		type: Boolean,
		default: false
	}
});

var TodoList = mongoose.model('TodoList', todoListSchema);

module.exports = TodoList;