import { TaskDao} from '@dao';
import { BusinessError } from '@core/error/business-error';
import { ObjectNotFoundError } from '@core/error/object-not-found-error';

const _findAll = async () => {
    return await TaskDao.findAll();
}

const _findById = async (id) => {
    const task = await TaskDao.findById(id);
    if (!task) {
        throw new ObjectNotFoundError();
    }
    return task;
}

const _create = async (task) => {
    return await TaskDao.create(task);
}

const _updateTaskDone = async (id) => {
    return await TaskDao.updateIsDone(id, true);
}

const _updateTaskUndone = async (id) => {
    return await TaskDao.updateIsDone(id, false);
}

export default {
    findAll: _findAll,
    create: _create,
    updateTaskDone: _updateTaskDone,
    updateTaskUndone: _updateTaskUndone,
    findById: _findById
}