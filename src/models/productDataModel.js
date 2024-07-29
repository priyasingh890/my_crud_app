const { Model } = require('objection');
const db = require('../db/knex'); // Ensure you import the knex instance

Model.knex(db);

class Product extends Model {
  static get tableName() {
    return 'product_data';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'integer', minimum: 0 }
      }
    };
  }
}

module.exports = Product;
