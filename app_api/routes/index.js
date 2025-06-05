const express = require('express');  // Express app
const router = express.Router();     // Router logic
const tripsController = require('../controllers/trips'); // Import the controller

// Define route for trips endpoint
router.route('/trips').get(tripsController.tripsList);  // GET Method routes tripList

// GET Method routes tripsFindByCode - requires parameter
router.route('/trips/:tripCode') 
    .get(tripsController.tripsFindByCode);

module.exports = router;
