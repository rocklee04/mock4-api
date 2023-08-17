const express = require('express');
const router = express.Router();
const Trip = require('../Models/tripPlan');

//routes for trip plan

//add the trip plan details
router.post('/add', async(req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).json({ message: 'Trip Details has been added successfully' });
    } catch(err) {
        res.send(400).json({ error: 'Error adding book' });
    }
})


//To get all the trips
router.get('/', async(req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch(err) {
        res.send(400).json({error: 'Error getting trips'});
    }
})


//To delete any trip details
router.delete('/:id', async(req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if(!trip) {
            res.status(400).json({ error: 'Trip not found' });
        }
        res.status(200).json({ message: 'Trip has been successfully deleted' });
    } catch(err) {
        res.send(400).json({error: 'Error deleting trip'});
    }
})


//To filter trips by destination
router.get('/filter', async(req, res) => {
    const {destination} = req.query;
    try {
        const filteredTrips = await Trip.find({destination});
        res.status(200).json(filteredTrips);
    } catch(err) {
        res.send(400).json({error: 'Error filtering trips'});
    }
})

//To sort the trips by budget per person
router.get('/sort', async(req, res) => {
    const {budgetPerPsn} = req.query;
    try {
        const sorted = await Trip.find().sort({budgetPerPsn:budgetPerPsn});
        res.status(200).json(sorted);
    } catch(err) {
        res.send(400).json({error: 'Error sorting trips'});
    }
})

module.exports = router;