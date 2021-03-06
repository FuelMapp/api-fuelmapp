const app = require('../app');
const http = require('http');
const {normalizePort} = require('../utils').http

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
