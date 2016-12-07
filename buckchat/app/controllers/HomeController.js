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


/*
 * Query the database for an array of bucket names, and then send the array
 * to the home view to be displayed.
 */
HomeController.prototype.displayPage = function() {
    return function(req, res) {
        winston.debug('HomeController@displayPage() controller called.');

        // Read and reset any success message.
        var successMsg = req.session.successMsg;
        if (req.session.successMsg) {
            req.session.successMsg = null;
        }

        // Read and reset any error message.
        var errorMsg = req.session.errorMsg;
        if (req.session.errorMsg) {
            req.session.errorMsg = null;
        }

        // Mongoose aggregate query. The following query is based off of the
        // example here: http://stackoverflow.com/a/18578351/4467665
        Drip.aggregate([
            {$unwind: "$bucketNames"},
            {$group: {
                _id: null,
                bucks: {$addToSet : "$bucketNames"}
            }},
            {$project: {
                _id:0,
                bucketNames: "$bucks"
            }}
        ], function(err, bucketArray) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            var bucketNames = null;

            // Ensure the bucket array is not empty.
            if (bucketArray[0]) {
                bucketNames = bucketArray[0].bucketNames
            }

            // Render the view with the buckets.
            // NOTE: If no buckets exist, `bucketNames` will be null --> view 
            // must check for this!!
            return res.render('home.pug', {
                name: req.user.name,
                // Pass array of bucket names to the view.
                userBuckets: bucketNames,
                // Pass any success or error message to the view.
                createDripSuccess: successMsg,
                createDripError: errorMsg
            });
        });        
    };
};


/*
 * Action responsible for creating a drip.
 */ 
HomeController.prototype.createDrip = function() {
    return function(req, res) {
        winston.debug('HomeController@createDrip() controller called.');

        // Check that drip text is within the limit specified by requirements.
        if (req.body.text.length > 160) {
            req.session.errorMsg = 'Please limit yourself to 160 characters.';
            return res.redirect('home');
        }

        // Get bucket name array.
        bucketNames = getBucketNameArray(req.body.text);


        // Ensure there is at least one bucket specified.
        if (bucketNames.length <= 0) {
            winston.error('No bucket specified.');
            req.session.errorMsg = 'No bucket specified. Please specify a bucket for this drip by using the hashtag symbol (#).';
            return res.redirect('home');
        }

        // Decide whether drip is anonymous or not. 
        var choice = false;
        if (req.body.anonymous === 'on') {
            choice = true;
        }

        // Else all data is valid, so create and insert a new drip document.
        var drip = new Drip({
            text: req.body.text,
            user: req.user.username,
            bucketNames: bucketNames,
            anonymous: choice
        });


        // Attempt to save the drip.
        drip.save(function(err, drip) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            // Else drip successfully saved.
            winston.debug('Drip saved!');
            req.session.successMsg = "Your drip has been saved!";
            return res.redirect('home');
        });
    };
};


/*
 * Query the database for drips in respective buckets, and then send the array of drips
 * to the home view to be displayed.
 */
HomeController.prototype.showDrip = function() {
    return function(req, res) {
        winston.debug('HomeController@showDrip() controller called.')
        var individualBucketName = req.body.individualBucketButton;

        // Query database for all drips in the `individualBucketName` bucket.
        Drip.find({bucketNames: individualBucketName}, 'text user timestamp anonymous').sort({timestamp: 'desc'}).exec(function(err, drips) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            // Else no error - render the view with the drips.
            return res.render('bucket.pug', {
                name: req.user.name,
                // Pass array of drips to the view.
                drips: drips,
                individualBucketName: individualBucketName
            });
        });        
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
