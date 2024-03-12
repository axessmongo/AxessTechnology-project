const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        
    },
    lname: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    company: {
        type: String,
        
    },
    website: {
        type: String,
        
    },
    commands: {
        type: String,
        
    },
    serviceOption: {
        type: String,
        
    }
});

const Contact = mongoose.model('testing', contactSchema);

module.exports = Contact;
