const { Sequelize } = require("sequelize");
const { default: init } = require("./models");

async function initDb(dbUrl, dbOptions) {
    const db = new Sequelize(dbUrl, dbOptions);

    await db.authenticate();
    
    init(db);

    return db;
}

module.exports = {initDb};