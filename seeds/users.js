
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'manoj', password: 'manoj'},
        {id: 2, username: 'kumar', password: 'kumar'},
        {id: 3, username: 'ali', password: 'ali'}
      ]);
    });
};
