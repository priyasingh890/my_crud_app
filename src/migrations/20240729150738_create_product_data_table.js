
// src/migrations/20240729150738_create_product_data_table.js
exports.up = function(knex) {
    return knex.schema.createTable('product_data', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('price').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('product_data');
  };
  
  