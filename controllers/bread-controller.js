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

    post: (req, res) => {
        res.sendStatus(501);
    },

    put: (req, res) => {
        res.sendStatus(501);
    },

    delete: (req, res) => {
        res.sendStatus(501);
    }

};

