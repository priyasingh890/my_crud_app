const { Model } = require('objection');

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
        price: { type: 'number', minimum: 0 }
      }
    };
  }
}

module.exports = Product;
