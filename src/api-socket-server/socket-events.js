class SocketEvents {
  constructor(io) {
    this.io = io;
  }

  attach() {
    this.io.on('connection', (socket) => {
      console.log('connection');
    });
  }
}

export default SocketEvents;