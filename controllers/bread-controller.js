const breadModel = require('../models/bread-model');

module.exports = {

    getAll: async (req, res) => {
        try {
            const breads = await breadModel.getAll();
            res.status(200).json(breads);
        }
        catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    getById: async (req, res) => {
        try {
            const id = parseInt(req.params.id);

            const bread = await breadModel.getById(id);

            if(bread) {
                res.status(200).json(bread);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch (err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    post: async (req, res) => {
        try {
            const {name, price, weight} = req.body;

            if(!name || name.trim() === '' || price <= 0 || weight <= 0) {
                res.sendStatus(400);
                return;
            }

            const breadId = await breadModel.insert(req.body);

            res.status(200).json({breadId})
        }
        catch(err) {
            console.error(err);
            res.sendStatus(500);
        }
    },

    put: (req, res) => {
        res.sendStatus(501);
    },

    delete: (req, res) => {
        res.sendStatus(501);
    }

};

