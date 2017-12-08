import express from 'express';
import http from 'http';
import io from 'socket.io';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongodbStoreSession from './middlewares/mongodbStoreSession';
import passport from './services/passport';
import config from '../config';
import SocketEvents from './socket-events';
import routes from './routes';

class ApiSocketServer {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.io = io(this.http);
  }

  connectMongodb() {
    mongoose.Promise = global.Promise;

    mongoose.connect(config.MONGO_URI, { useMongoClient: true });
    mongoose.connection
      .once('open', () => console.log('Connected to MongoLab instance.'))
      .on('error', error => console.log('Error connecting to MongoLab:', error));
  }

  registerMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(mongodbStoreSession(config.MONGO_URI));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use((err, req, res, next) => res.status(500).send({ error: err.message }));
  }

  listen(port = 3001) {
    this.connectMongodb();
    this.registerMiddlewares();
    routes(this.app);
    new SocketEvents(this.io).attach();
    this.http.listen(port);
  }
}

export default new ApiSocketServer();