const app = require('./app');
const http = require('http');
const socketIO = require('socket.io');
const socketHandler = require('./sockets/socket');
 
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: '*' } });
socketHandler.init(io);
 
server.listen(process.env.PORT || 3000);