import express from 'express';
import http from 'http';
import io from 'socket.io';
import SocketEvents from './socket-events';

class SocketServer {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.io = io(this.http);
  }

  listen(port = 3001) {
    new SocketEvents(this.io).attach();
    this.http.listen(port);
  }
}

export default SocketServer;