import UsersModel from '../models/UsersModel.js'

export const getUser = async (req, res) => {
    try {
        const user = await UsersModel.findAll({
            where: {
                user: req.params.user,
                password: req.params.password
            }
        });
        if (user.length > 0) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createUser = async(req, res) => {
    try {
        await UsersModel.create(req.body);
        res.json({ "message": "Registro creado exitosamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUser = async(req, res) => {
    try {
        await UsersModel.update(req.body, {
            where: {
                user: req.params.user,
                password: req.params.password
            }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUser = async(req, res) => {
    try {
        UsersModel.destroy({
            where: {
                user: req.params.user,
                password: req.params.password
            }
        })
    } catch (error) {
        res.json({ message: error.message });
    }
}