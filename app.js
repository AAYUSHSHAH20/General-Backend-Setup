const express = require('express');
const cors = require('cors');
const db = require('./config/database');
const helmet = require('helmet');
const { PORT } = require('./config/index');

app.use(cors({
    origin: '*',
}));

const app = express();

app.use(express.json());

app.use(helmet());

app.disable('x-powered-by');

app.use('/', require('./routes/index'));

try {
    db();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}
catch (error) {
    console.error('Error connecting to database:', error.message);
}