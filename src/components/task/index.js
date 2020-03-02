const router = require("express").Router();
const taskController = require('./task.controller');

router.use('/tasks', taskController);

module.exports = router;