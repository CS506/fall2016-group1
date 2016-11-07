module.exports = {
    //defaultConnection: // Optional name of default connection [default is $default]

    connections: {     // Define one or more connections by name.    
        $default: {
            // Mongodb connection string
            connstr:  'mongodb://localhost/buckchat',
            options:  {    // mongoose connection options

            }      
        }
    }
};
