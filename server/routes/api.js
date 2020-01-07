const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Use body parser to parse JSON body
router.use(bodyParser.json());

const options = {
    apiKey: '6fe96d7615619f614f210ff7f300c43a70357fff90eab9683e29875b916f9979',         // use your sandbox app API key for development in the test environment
    username: 'sandbox',      // use 'sandbox' for development in the test environment
};

const africasTalking = require('africastalking')(options);
// Initialize a service e.g. SMS
sms = africasTalking.SMS

// Use the service
router.post('/send', function(req, res){
    var dataTosend = {        
        to: req.body.to,
        message: `Hello ${req.body.fname}, ${req.body.message}`
    }
    
    // Send message and capture the response or error
    sms.send(dataTosend)
        .then( response => {
            console.log(response);
            console.log(`+++++++++++++++++++++++++++++++++EveryThing works well so far++++++++++++++++++++++++++++++++++++++`)
            return res.contentType('application/json').status(201).send(JSON.stringify(response));
        })
        .catch( error => {
            console.log(error);
        });
});

module.exports = router;
