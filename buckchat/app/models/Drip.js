var mongodb = require('@onehilltech/blueprint-mongodb');

var schema = new mongodb.Schema({
    text: {type: String, required: true, trim: true, minlength: 1, maxlength: 160},
    user: {type: String, lowercase: true, required: true, trim: true, minlength: 3, maxlength: 15},
    timestamp: {type: Date, default: Date.now},
    anonymous: Boolean,
    bucketNames: [String]
});

const COLLECTION_NAME = 'drip';
module.exports = exports = mongodb.model(COLLECTION_NAME, schema);
