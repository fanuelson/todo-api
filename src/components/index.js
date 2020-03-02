const router = require("express").Router();
const task = require('./task');

router.use(task);

module.exports = router;