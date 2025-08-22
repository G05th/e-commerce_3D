require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USER || "user",
        password: process.env.DB_PASSWORD || "germano123",
        database: process.env.DB_NAME || "ecommerce_db",
        host: process.env.DB_HOST || "db",
        dialect: "postgres",
        port: process.env.DB_PORT || 5432,
    },
    test: {
        username: process.env.DB_USER || "user",
        password: process.env.DB_PASSWORD || "germano123",
        database: process.env.DB_NAME || "ecommerce_db",
        host: process.env.DB_HOST || "db",
        dialect: "postgres",
        port: process.env.DB_PORT || 5432,
    },
    production:{
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl:{
                require: true,
                rejectUnauthorized: false
            }
        }
    }
}