const express = require('express');
const path = require('path');
const React = require('react');
const renderToString = require('react-dom/server');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('client/public'));
app.use(express.static('client/dist'));

app.listen(PORT, () => { console.log(`App is listening on port ${PORT}.`); });