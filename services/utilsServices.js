const http_constant = require("../config/httpConstant");

/* YYYY-MM-DD */
exports.formatDate = (date) => {
    return Intl.DateTimeFormat('en-CA').format(new Date(date));
};

exports.ReE = (res, code, err) => { // Error Web Response
    const err_obj = {
        status: code,
        message: err.message
    };
    return res.status(code).json(err_obj);
};

exports.ReS = (res, status, message, data) => { // Success Web Response
    const res_obj = {
        status: status,
        message: message,
        data: data
    }
    if (res.is_server_comunication) {
        res.is_server_comunication = undefined;
        return res.status(status).json(res_obj);
    }
    else {
        return res.status(http_constant.ok).json(res_obj);
    }
};