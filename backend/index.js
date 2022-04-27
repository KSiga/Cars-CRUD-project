const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./api');
const bodyParser = require('body-parser');
const cors = require('cors');
// db
require('./mongoose');
// parsery
app.use(bodyParser.json());
// fix cors
app.use(cors());
// routes
app.use('/api/', apiRouter);
// serwer
app.listen(port, function () {
    console.log(`serwer słucha... ${port}`);
});