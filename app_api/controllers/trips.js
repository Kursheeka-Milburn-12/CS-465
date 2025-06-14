const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (req, res) => {
    try {
        const trips = await Model.find().exec();

        if (trips.length === 0) {
            return res.status(404).json({ message: 'No trips found' });
        }

        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }
};

// GET: /trips/:tripCode - find a trip by code
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Model.findOne({ code: req.params.tripCode }).exec();

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        return res.status(200).json(trip); // Return the found trip
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }
};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    // Extract the trip details from the request body
    const { code, name, length, start, resort, perPerson, image, description } = req.body;

    // Validate if all required fields are provided
    if (!code || !name || !length || !start || !resort || !perPerson || !image || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new trip instance
        const newTrip = new Trip({
            code,
            name,
            length,
            start,
            resort,
            perPerson,
            image,
            description
        });

        // Save the new trip to the database
        const savedTrip = await newTrip.save();

        // Return the saved trip with status 201
        return res.status(201).json(savedTrip);
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }
};

// PUT: /trips/:tripCode - Update an existing trip by tripCode
const tripsUpdateTrip = async (req, res) => {
    try {
        // Log for debugging
        console.log(req.params);
        console.log(req.body);

        // Find and update the trip by the trip code
        const updatedTrip = await Model.findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            },
            { new: true } // Ensure the updated document is returned
        ).exec();

        if (!updatedTrip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        return res.status(200).json(updatedTrip);  // Return the updated trip
    } catch (err) {
        return res.status(500).json({ message: 'Server Error', error: err });
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
