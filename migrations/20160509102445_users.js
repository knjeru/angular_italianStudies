
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
      table.increments('id');
      table.string('user_name');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
