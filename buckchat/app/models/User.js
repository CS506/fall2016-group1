var blueprint = require ('@onehilltech/blueprint-mongodb')
  ;

var schema = new blueprint.Schema({
  firstname: {type: String, required: true, trim: true},
  lastname: {type: String, required: true, trim: true},
});

const COLLECTION_NAME = 'user';
module.exports = exports = blueprint.model (COLLECTION_NAME, schema);
