const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/example')
mongoose.Promise = global.Promise;

module.exports = mongoose;
