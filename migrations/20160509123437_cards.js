
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table) {
      table.increments('id');
      table.integer('user');
      table.integer('deck');
      table.text('question').notNullable();
      table.text('answer').notNullable();
      table.boolean('correct_answer').defaultTo(false);
      table.boolean('incorrect_answer').defaultTo(false);
      table
          .foreign('deck')
          .references('id')
          .inTable('decks');
      table
          .foreign('user')
          .references('id')
          .inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
