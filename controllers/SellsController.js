import SellsModel from '../models/SellsModel.js';

// Métodos para el CRUD

// Mostrar todo
export const getAllSells = async(req, res) => {
    try {
        const sells = await SellsModel.findAll();
        res.json(sells);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un registro
export const getSell = async(req, res) => {
    try {
        const sell = await SellsModel.findAll({
            where: { id: req.params.id }
        });
        res.json(sell[0]);

    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un registro
export const createSell = async(req, res) => {
    try {
        await SellsModel.create(req.body);
        res.json({ "message": "Registro creado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un registro
export const updateSell = async(req, res) => {
    try {
        await SellsModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ "message": "Registro actualizado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un registro
export const deleteSell = async(req, res) => {
    try {
        await SellsModel.destroy({
            where: {id: req.params.id}
        })
        res.json({ "message": "Registro eliminado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}