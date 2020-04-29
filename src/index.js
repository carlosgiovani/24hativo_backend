const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const util = require('./Util/utilidade');
const routes = require('./routes');

const app = express();

mongoose.connect(util.StringConexao, { useNewUrlParser: util.defaultIseNewUrlParser, useUnifiedTopology: util.defaultUseUnifiedTopology });

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    return response.json({ texto : "hello" });
});

app.listen(3333);