/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product_data', table => {
    table.increments('id').primary(); // Auto-incrementing ID column
    table.string('name').notNullable(); // Name column
    table.decimal('price').notNullable(); // Price column
    table.timestamps(true, true); // Adds created_at and updated_at columns with defaults
  });
};


exports.down = function(knex) {
  return knex.schema.dropTableExists('product_data');
};
