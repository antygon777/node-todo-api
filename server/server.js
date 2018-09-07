//node server/server.js  
//localhost:3000/todos
console.log("777 node server/server.js !!!!!!!!!!!!!!");

var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
//...... 
var app = express();

app.use( bodyParser.json() );

app.post('/todos', ( req, res ) => {
	console.log( 'req.body:::' + req.body );
	var todo = new Todo({
		text: req.body.text
	});
	//......
	todo.save().then( (doc) => {
		res.send(doc);

	}, (e) => {
		res.status(400).send(e);

	});
	//......
});

app.listen( 3000, () => {
	console.log('Started on port 3000');
});
//...... 
/*
	//mongoose.Promise = global.Promise;
	//...... 
	//mongoose.connect('mongodb://localhost:27017/TodoApp');
	//...... 

	var Todo = mongoose.model(	'Todo',   //string name of the model
								{
									text: {
										type: String,
										required: true,
										minlength: 1,
										trim: true 	//remove whitespace in beginning/end
									},
									completed: {
										type: Boolean,
										default: false
									},
									completedAt: {
										type: Number,
										default: null
									}
									//createdAt //inútil criar, mongoose já tem essa prop por default
	});
*/
//......
/*
var newTodo = new Todo({
	text: '         One     More     Todo         ',   //
	completed: false,
	completedAt: 100
});
//......
newTodo.save().then( (doc) => { 
	console.log( "saved todo", doc );
}, (e) => { 
	console.log( "Unable to save todo", e );
});
*/