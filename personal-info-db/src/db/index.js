const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('personal_info_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // or 'sqlite', 'postgres', 'mssql'
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

connectDB();

module.exports = sequelize;