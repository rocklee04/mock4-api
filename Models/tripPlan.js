const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        enum: ['India', 'Africa', 'Europe', 'America'],
        required: true
    },
    noOfTravelers: {
        type: Number,
        required: true
    },
    budgetPerPsn: {
        type: Number,
        required: true
    }
})

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;