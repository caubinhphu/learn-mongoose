const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/learn_express', {useNewUrlParser: true});


const todoListRouter = require('./routers/todolist.route.js');



const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('', function(request, response) {
	// response.send('Hello');
	response.redirect('/todolist');
})

app.use(express.static('publics'));

app.use('/todolist', todoListRouter);

app.listen(3000, () => console.log('Server is turned on'));

