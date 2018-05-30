exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_items').insert([{
          name: 'hinkali',
          price: 14.00,
          calories: 400,
          gluten_free: false
        },
        {
          name: 'spaghetti',
          price: 29.99,
          calories: 650,
          gluten_free: false
        },
        {
          name: 'soup dumpling',
          price: 10.00,
          calories: 800,
          gluten_free: false
        }
      ]);
    });
};