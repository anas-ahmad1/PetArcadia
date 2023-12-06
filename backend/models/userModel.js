const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    contact: {
        type: String,
        required: [true, 'Please add a contact']
    },
    gender: {
        type: String,
        required: [true, 'Please add a gender']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    image: {
        type: String
    }
},
{
 timestamps: true   
})

module.exports = mongoose.model('User', userSchema)