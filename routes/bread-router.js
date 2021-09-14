const breadController = require("../controllers/bread-controller")

module.exports = (router) => {

    router.route('/bread')
        .get(breadController.getAll)
        .post(breadController.post);

    router.route('/bread/:id([0-9]+)')
        .get(breadController.getById)
        .put(breadController.put)
        .delete(breadController.delete);
        
} 