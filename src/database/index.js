const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/money_manager')
mongoose.Promise = global.Promise;

module.exports = mongoose;