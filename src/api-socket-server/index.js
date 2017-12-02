import express from 'express';
import http from 'http';
import io from 'socket.io';
import mongoose from 'mongoose';
import config from '../config';
import SocketEvents from './socket-events';
import routes from './routes';

class ApiSocketServer {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.io = io(this.http);
  }

  connectMongoDB() {
    mongoose.Promise = global.Promise;

    mongoose.connect(config.MONGO_URI, { useMongoClient: true });
    mongoose.connection
      .once('open', () => console.log('Connected to MongoLab instance.'))
      .on('error', error => console.log('Error connecting to MongoLab:', error));
  }

  useMiddlewares() {}

  listen(port = 3001) {
    this.connectMongoDB();
    this.useMiddlewares();
    routes(this.app);
    new SocketEvents(this.io).attach();
    this.http.listen(port);
  }
}

export default new ApiSocketServer();