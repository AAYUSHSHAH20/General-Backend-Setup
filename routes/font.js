const { helloWorld } = require('../controllers/front');
const router = require('express').Router();

router.post('/hello-world', helloWorld);

module.exports = router;