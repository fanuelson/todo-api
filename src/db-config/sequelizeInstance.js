import Sequelize from 'sequelize';

const sequelize = new Sequelize('mysql://root:my-secret-pw@localhost:3307/todo_db', {
  define: {
    freezeTableName: true,
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to DATABASE has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;