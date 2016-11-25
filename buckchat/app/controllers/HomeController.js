var blueprint     = require('@onehilltech/blueprint')
    , util        = require('util')
    , winston     = require('winston')
    , Drip        = require('../models/Drip')
    , handleError = require('../plugins/HandleError')
    ;

function HomeController() {
    blueprint.BaseController.call(this);
}

blueprint.controller(HomeController);

HomeController.prototype.displayPage = function() {
    return function(req, res) {
        return res.render('home.pug', {name: req.user.name});
    };
};


/*
 * Action responsible for creating a drip.
 */ 
HomeController.prototype.createDrip = function() {
    return function(req, res) {
        winston.debug('HomeController@createDrip() controller called.')

        // Checking drip content matches data requirements
        if(req.body.text.length <160) {

        // Get bucket name array.
        bucketNames = getBucketNameArray(req.body.text);

        // Ensure there is at least one bucket specified.
        if (bucketNames.length <= 0) {
            winston.error('No bucket specified.');
            // Send HTTP status 400 Bad Request.
            res.status(400);
            return res.render('home.pug', {
                name: req.user.name,
                createDripError: 'No bucket specified. Please specify a bucket for this drip by using the hashtag symbol (#).'
            });
        }

        // Else all data is valid, so create and insert a new drip document.
        var drip = new Drip({
            text: req.body.text,
            user: req.user.username,
            bucketNames: bucketNames
        });

        // Attempt to save the drip.
        drip.save(function(err, drip) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            // Else drip successfully saved.
            winston.debug('Drip saved!')
            return res.render('home.pug', {
                name: req.user.name,
                createDripSuccess: 'Your drip was saved!'
            });
        });
        }
        else {
            // Bad Request - Conflict with Data requirements
            res.status(400);
            return res.render('home.pug', {
                name: req.user.name,
                createDripError: 'Please limit your drip up to 160 characters'
            });
        }

    };
};


/*
 * Given the text of the drip, return the array of bucket names.
 */
function getBucketNameArray(text) {
    // Regular expression to match a bucket name following the hashtag symbol (#).
    var pattern = /#([^\s#]+)/g;

    // Array of bucket names.
    var buckets = [];

    // For each occurrence of a match, extract the bucket name and append to array. 
    while (match = pattern.exec(text)) {
        var bucket = match[1];
        buckets.push(bucket);
    }

    return buckets;
}


module.exports = exports = HomeController;
