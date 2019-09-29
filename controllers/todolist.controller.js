const todoList = require('../models/todolist.model');

module.exports.index = async function(request, response, next) {
	// console.log(todoList.find({}));
	// response.render('todolist/index', {
	// 		title: 'Todo List',
	// });
	
	var todos = await todoList.find();
	await Promise.all(todos.map(todo =>	todo.save())); // return promise

	response.render('todolist/index', {
		title: 'Todo List',
		todoList: todos
	})
};