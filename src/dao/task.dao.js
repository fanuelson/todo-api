import Task from '@model/task';

const _findAll = async () => {
  return await Task.findAll();
}

const _findById = async (id) => {
  return await Task.findOne({
    where: {
      id: id
    }
  });
}

const _create = async (task) => {
  return await Task.create(task);
}

const _updateIsDone = async (id, isDone) => {
  return await Task.update({ isDone: isDone }, {
    where: {
      id: id
    }
  });
}

export default {
  findAll: _findAll,
  create: _create,
  updateIsDone: _updateIsDone,
  findById: _findById
}