'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const SERVICE = process.env.K_SERVICE || "unknown";
const REVSION = process.env.K_REVISION || "unknown";

// App
const app = express();
app.get('/', (req, res) => {
  res.send("demooo --> " + SERVICE + '@' + REVSION);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);