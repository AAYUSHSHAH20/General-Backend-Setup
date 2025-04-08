const http_constant = require('../config/httpConstant');
const { ReS, ReE } = require('../services/utilsServices');

const helloWorld = async (req, res) => {
    try {
        return ReS(req, http_constant.ok, "Hello World!");
    }
    catch (error) {
        console.log("Error at helloWorld", error)
        return ReE(res, http_constant.internal_server_error, "An error occurred while fetching hello world");
    }
}

module.exports = {
    helloWorld,
}