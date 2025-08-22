const { Sequelize, DataTypes} = require("sequelize");
const config = require("./config")

const env = process.env.NODE_ENV || "development";
const dbconfig = config[env];

const sequelize = new Sequelize(
    dbconfig.database,
    dbconfig.username,
    dbconfig.password,{
        host: dbconfig.host,
        dialect: dbconfig.dialect,
        port: dbconfig.port,
        logging: false,
        dialectOptions: dbconfig.dialectOptions || {},
    }
);

const db = {};

db.sequelize = sequelize;
db.sequelize = sequelize;

db.User = require("../models/User")(sequelize, DataTypes);
db.Product = require("../models/Product")(sequelize, DataTypes);
db.Category = require("../models/Category")(sequelize, DataTypes);

Object.keys(db).forEach((modelName)=>{
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
});

model.exports = db;