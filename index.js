const express = require('express');

const todoListRouter = require('./routers/todolist.route.js');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');


app.get('', function(request, response) {
	response.send('Hello');
})

app.use(express.static('publics'));

app.use('/todolist', todoListRouter);

app.listen(3000, () => console.log('Server is turned on'));

