const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/', require('./Routes/TotalPriceRoute'));

// 
module.exports = app;
