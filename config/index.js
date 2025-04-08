require('dotenv').config();

module.exports = {
    PROJECT_NAME: process.env.PROJECT_NAME,
    PRODUCT_NAME: process.env.PRODUCT_NAME,
    is_server: process.env.is_server,
    PORT: process.env.PORT,
    MongoDB_HOST: process.env.MongoDB_HOST,
    MongoDB_URI: process.env.MongoDB_URI,
}