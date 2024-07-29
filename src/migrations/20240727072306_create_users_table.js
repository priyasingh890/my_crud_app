// src/migrations/<timestamp>_create_product_data_table.js

exports.up = function(knex) {
  return knex.schema.createTable('product_data', table => {
    table.increments('id').primary(); // Primary key with auto-increment
    table.string('name').notNullable(); // Product name, cannot be null
    table.integer('price').notNullable(); // Product price, cannot be null
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('product_data'); // Drops the product_data table
};
