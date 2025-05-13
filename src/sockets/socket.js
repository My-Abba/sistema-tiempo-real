module.exports = io => {
    io.on('connection', socket => {
      console.log('Cliente conectado:', socket.id);
    });
  };
   
  // Métodos auxiliares:
  let _io;
  module.exports.init = io => { _io = io; module.exports(io); };
  module.exports.emitTaskUpdate = data => _io.emit('taskUpdated', data);
  module.exports.emitInvitation = data => _io.emit('invitation', data);