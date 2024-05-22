import MainModel from '../models/MainModel.js';

export const getAllProducts = async (req, res) => {
    try {
        const products = await MainModel.findAll({
        });
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await MainModel.findAll({
            where: {id: req.params.id},
        });
        res.json(product);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {
        await MainModel.create(req.body);
        res.json({ "message": "Registro creado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateProduct = async (req, res) => {
    try {
        await MainModel.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({ "message": "Registro actualizado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await MainModel.destroy({
            where: {id: req.params.id}
        });
        res.json({ "message": "Registro eliminado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

