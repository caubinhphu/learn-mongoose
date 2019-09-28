module.exports = {
	index: function(request, response, next) {
		response.render('todolist/index', {
			title: 'Todo List'
		});
	}
};