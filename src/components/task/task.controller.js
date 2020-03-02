import asyncMiddleware from '@core/utils/asyncMiddleware';
import { TaskService } from '@services';
import { checkIsRequired, validatorMiddleware, checkParamIsNumber } from '@validators';
import express from 'express';
import { param } from 'express-validator';

const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await TaskService.findAll();
    res.status(200).send(tasks);
})

router.get('/:id',
    validatorMiddleware(
        checkParamIsNumber('id')
    )
    , asyncMiddleware(async (req, res) => {
        const taskId = req.params.id;
        
        const task = await TaskService.findById(taskId);
        res.status(200).send(task);
    }))

router.post('/',
    validatorMiddleware(
        checkIsRequired('name')
    )
    , asyncMiddleware(async (req, res) => {
        const taskCreated = await TaskService.create(req.body);
        res.status(200).send(taskCreated);
    }))

router.put('/:taskId/done', async function(req, res){
    const taskId = req.params.taskId;
    if(isNaN(taskId)) {
        return res.status(422).send({"message": "Id parameter must be a number"});
    }

    const taskUpdated = await TaskService.updateTaskDone(taskId);

    res.status(200).send({"tasksUpdated": taskUpdated});
})

router.put('/:taskId/undone', async function(req, res){
    const taskId = req.params.taskId;
    if(isNaN(taskId)) {
        return res.status(422).send({"message": "Id parameter must be a number"});
    }

    const taskUpdated = await TaskService.updateTaskUndone(taskId);

    res.status(200).send({"tasksUpdated": taskUpdated});
})

module.exports = router;