import StockModel from '../models/StockModel.js';

// Métodos para el CRUD

// Mostrar todo
export const getAllStock = async(req, res) => {
    try {
        const stock = await StockModel.findAll();
        res.json(stock);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un registro
export const getStock = async(req, res) => {
    try {
        const stock = await StockModel.findAll({
            where: { id: req.params.id }
        });
        res.json(stock[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un registro
export const createStock = async(req, res) => {
    try {
        await StockModel.create(req.body);
        res.json({ "message": "Registro creado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un registro
export const updateStock = async(req, res) => {
    try {
        await StockModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ "message": "Registro actualizado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un registro
export const deleteStock = async(req, res) => {
    try {
        await StockModel.destroy({
            where: {id: req.params.id}
        })
        res.json({ "message": "Registro eliminado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}