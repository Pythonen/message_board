const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const errorHandlers = require('./middlewares/errorHandlers');
const apiRouter = require('./api/index');

app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(compression());
app.use('/api/v1/', apiRouter);
app.use(errorHandlers.notFound);
app.use(errorHandlers.errorHandler);

module.exports = app;
