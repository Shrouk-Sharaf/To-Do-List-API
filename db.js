const sequelize = require("sequelize");

const db  = new sequelize("to_do_list", "root", "", {
    host: "localhost",
    dialect:"mysql",
});

module.exports = db;