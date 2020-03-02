import Sequelize from 'sequelize';
import sequelize from '../db-config/sequelizeInstance';

const Task = sequelize.define('task', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isDone: {
    type: Sequelize.BOOLEAN
  }
}, {
  // options
});

export default Task;