var winston = require('winston')
    ;

/*
 * Generic method to handle errors.
 *
 * Given an response object, and error string, and an HTTP status code (integer),
 * set the HTTP status and render a view with the error message displayed.
 */ 
 
function handleError(res, err, code) {
    winston.error("(status code " + code + "): " + err);

    // Set status and display custom error view.
    res.status(code);
    return res.render('error.pug', {error: err, code: code});
}

module.exports = exports = handleError;