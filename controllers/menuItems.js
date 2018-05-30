

const menuItemModel = require('../models/menuItem')
const index = (request, response) => {
       menuItemModel.index()
          .then(result => { response.json(result);})
          .catch(error => {
              console.error(error);
          });
}

module.exports = {
    index
}