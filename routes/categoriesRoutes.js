const CategoriesController = require('../controllers/categoriesController');

module.exports = (app => {

    /*
    * POST ROUTES
    */
   app.post('/api/categories/create', CategoriesController.create);

}) 