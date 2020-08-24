const express = require('express');
const server = express();
server.use(express.static("/home/dci/Desktop/justify content/public"));

const port = 5555;
server.listen(port);