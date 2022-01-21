const express = require('express');
const router = express.Router();
const contacts = require('../models/contacts');

//retrieveing data
router.get('/contacts', (req, res, next) => {
    // logics for retrieving data from database
    // to allow cors between different ports
    res.set('Access-Control-Allow-Origin', '*');
    contacts.find((err, contacts) => {
        res.json(contacts);
    })
});

//add data
router.post('/contacts', (req, res, next) => {
    // logic to add contacts
    res.set('Access-Control-Allow-Origin', '*');
    let newContact = new contacts({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    })
    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'failed to add contact' });
        } else {
            res.json({ msg: 'contact added successfully' });
        }
    })
});

//delete data
router.delete('/contacts/:id', (req, res, next) => {
    // logic to delete contacts with id
    // id is auto-generated for each document
    res.set('Access-Control-Allow-Origin', '*');
    contacts.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    })
});

// update data

module.exports = router;