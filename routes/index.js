const express = require('express');

const router = express.Router();

// const cakeRouter = require('./cake-router')
// cakeRouter(router);

require('./cake-router')(router);



module.exports = router;