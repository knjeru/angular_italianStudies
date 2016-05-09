
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function(table) {
      table.increments('id');
      table.integer('user');
      table.string('subject');
      table
          .foreign('user')
          .references('id')
          .inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
