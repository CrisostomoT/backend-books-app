const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./routes')
const { initMongo } = require('./db');

require('dotenv').config();
initMongo();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('tiny'))
app.use("/api", router);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server initialized in port ${PORT}`));