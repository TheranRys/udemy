const ProductsController = require('../controllers/productsController');


module.exports = (app,upload) => {
    //Traer datos
    app.post('/api/products/create', upload.array('image', 3), ProductsController.create);
}