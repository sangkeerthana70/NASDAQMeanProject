var mongoose = require('mongoose');
//var users = mongoose.model('User');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
});

mongoose.model('User', userSchema);