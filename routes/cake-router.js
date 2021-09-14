const cakeController = require('../controllers/cake-controller');

module.exports = (router) => {

    router.route('/cake')
        .get(cakeController.getAll)
        .post(cakeController.post)

    router.route('/cake/:id([0-9]+)')
        .get(cakeController.getById)
        .put(cakeController.put)
        .delete(cakeController.delete)
};