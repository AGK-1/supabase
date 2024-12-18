const  config  = require("../config");
const { Sequelize } = require("sequelize");

//console.log(config.databaseURL);
const sequelize = new Sequelize(config.databaseURL);

sequelize.authenticate().then(() => {
    console.log("connect is succesfully");
}).catch((err) => {
    console.error("Error with connection");
})

sequelize.sync({ alter: true });

module.exports = sequelize;
