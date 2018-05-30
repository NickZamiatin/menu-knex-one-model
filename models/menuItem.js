

const knex = require('../database');

const index = () => 
  
 knex('menu_items')
        .then(result => {
            return result
        })
        .catch(error => {
            console.error(error);
        });


module.exports = {
    index
}; 