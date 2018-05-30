
exports.up = function (knex, Promise) {
    return knex.schema.alterTable('menu_items', table => {
        table.boolean('gluten_free')
    })
};

exports.down = function (knex, Promise) {

    return knex.schema.alterTable('menu_items', table => {
        table.dropColumn('gluten_free');
    });
};
