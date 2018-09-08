//console.log("node server/db/mongoose.js !!!!!!!!!!!!!!");
var mongoose = require('mongoose');

//...... 
mongoose.Promise = global.Promise;
//...... 
//mongoose.connect('mongodb://localhost:27017/TodoApp');
//...... ALT. NO VIDEO 07 80
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
//module.exports.mongoose = mongoose;