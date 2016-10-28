var mongodb = require('@onehilltech/blueprint-mongodb');

var schema = new mongodb.Schema({
  name: {type: String, lowercase: true, required: true, trim: true},
  email: {type: String, lowercase: true, required: true, trim: true},
  username: {type: String, lowercase: true, required: true, trim: true},
  password: {type: String, required: true, trim: true},
});

const COLLECTION_NAME = 'user';
module.exports = exports = mongodb.model(COLLECTION_NAME, schema);
