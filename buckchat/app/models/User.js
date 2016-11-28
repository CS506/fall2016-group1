var mongodb = require('@onehilltech/blueprint-mongodb');

var schema = new mongodb.Schema({
    username: {type: String, lowercase: true, required: true, trim: true, minlength: 3, maxlength: 15},
    password: {type: String, required: true, trim: true, minlength: 6, maxlength: 12},
    name: {type: String, required: true, trim: true, minlength: 1, maxlength: 30},
    email: {type: String, lowercase: true, required: true, trim: true}
});

const COLLECTION_NAME = 'user';
module.exports = exports = mongodb.model(COLLECTION_NAME, schema);
