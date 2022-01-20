// our contact data schema
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

const Contacts = module.exports = mongoose.model('Contacts', contactSchema);