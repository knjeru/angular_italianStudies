
exports.up = function(knex, Promise) {
  return knex.schema.table('decks', function(table) {
      table.timestamp('date_created').defaultTo(knex.fn.now());
      table.text('deck_cover');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('decks', function(table) {
      table.dropColumn('date_created');
      table.dropColumn('deck_cover');
  })
};
