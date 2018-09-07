var mongoose = require('mongoose');
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
//...... 
module.exports = { Todo };
//......
