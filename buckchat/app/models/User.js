var blueprint = require('@onehilltech/blueprint-mongodb');

var schema = new blueprint.Schema({
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  username: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
});

const COLLECTION_NAME = 'user';
module.exports = exports = blueprint.model(COLLECTION_NAME, schema);
