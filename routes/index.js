const router = require('express').Router();
const http_constant = require('../config/httpConstant');
const { ReE, ReS } = require('../services/utilsServices');
const front = require('../routes/font');

router.use((req, res, next) => {
    if (/\/{2,}/.test(req.url)) {  // Regular expression for double slashes
        console.log("URL contains multiple slashes", req.url);
        return ReS(res, http_constant.not_found, 'Resource Not Found');
    }
    next();
});

router.use('/api/front', front);

router.use(function (req, res) {
    const err = new Error('Resource Not Found');
    err.status = http_constant.not_found;
    const resources = {};
    res.status(http_constant.not_found);
    resources.status = err.status;
    resources.message = err.message;
    return res.json(resources);
});


module.exports = router;