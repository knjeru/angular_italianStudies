
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
      table.increments('id');
      table.integer('created_by');
      table.integer('deck');
      table.text('question').notNullable();
      table.text('answer').notNullable();
      table.boolean('correct_answer').defaultTo(false);
      table.boolean('incorrect_answer').defaultTo(false);
      table.integer('answered_by');
      table
          .foreign('deck')
          .references('id')
          .inTable('decks');
      table
          .foreign('created_by')
          .references('id')
          .inTable('users');
      table
          .foreign('answered_by')
          .references('id')
          .inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
