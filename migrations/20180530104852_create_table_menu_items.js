
// SQL version CREATE TABLE menu_item ()'

exports.up = function(knex, Promise) {
  return knex.schema.createTable ('menu_items', table =>{
      table.increments(); // id SERIAL PRIMERY KEY
     table.string('name', 64) // name VARCHAR (64)
      table.float('price', 3, 2); // price NUMERICAL (3,2)
      table.integer('calories'); // colories INTENGER 
      table.timestamps(true, true) // created_at TIMESTAMPTZ , update_at TIMESTAMPTZ
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu_items')
};
