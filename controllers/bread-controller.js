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

    put: async (req, res) => {
        try {
            const breadId = parseInt(req.params.id);
            const {name, price, weight} = req.body;

            if(!name || name.trim() === '' || price <= 0 || weight <= 0) {
                res.status(400).json({error: 'Bad params !'});
                return;
            }

            const isOk = await breadModel.update(breadId, req.body);

            if(!isOk) {
                res.status(500).json({error: 'Update fail !'});
                return;
            }
            
            res.sendStatus(204);
        }
        catch(err) {
            res.sendStatus(500);
        }
    },

    delete: async (req, res) => {
        try {
            const breadId = parseInt(req.params.id);

            const isOk = await breadModel.delete(breadId);

            if(!isOk) {
                res.sendStatus(404);
                return;
            }

            res.sendStatus(204);
        }
        catch(err) {
            res.sendStatus(500);
        }
    }
};

