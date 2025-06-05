const tripsEndpoint = 'http://localhost:3000/api/trips';  // API endpoint
const options = {
    method: 'GET',  // Specify GET method for the request
    headers: {
        'Accept': 'application/json'  // Accept JSON response
    }
};

// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = async (req, res, next) => {
    // console.log("TRAVEL CONTROLLER BEGIN"),
    await fetch(tripsEndpoint, options)
        .then(res => res.json())  // Convert response to JSON
        .then(json => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else if (json.length === 0) {
                message = "No trips exist in our database!";
            }
            res.render('travel', { title: 'Travlr Getaways', trips: json, message });
        })
        .catch(err => res.status(500).send(err.message));  // Handle any errors during the fetch
};

module.exports = {
    travel
};
