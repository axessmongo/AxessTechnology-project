const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegisterFormSchema = new Schema({
    fname: {
        type: String,
      
    },
    lname: {
        type: String,
        
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
       
    },
    phone: {
        type: Number,
        
    }
});

const UserModel = mongoose.model('User', RegisterFormSchema);

 module.exports = UserModel;
 