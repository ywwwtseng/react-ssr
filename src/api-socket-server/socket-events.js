class SocketEvents {
  constructor(io) {
    this.io = io;
  }

  attach() {
    this.io.on('connection', (socket) => {});
  }
}

export default SocketEvents;