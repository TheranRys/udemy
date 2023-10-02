const Category = require('../models/category');

module.exports = {

    async create(req, res, next) {
        try {
            const category = req.body;
            console.log(`Categoria enviada: ${category}`);

            const data = await Category.create(category);
            
            return res.status(201).json({
                message: 'La categoria se creo correctamente',
                success: true,
                error: data.id
            });

        } catch (error) {
            console.log(`Error: ${error}`)
            return res.status(501).json({
                message: 'Hubo un error al crear la categoria',
                success: false,
                error: error
            });
        }
    }
}