import express from 'express';
import http from 'http';
import io from 'socket.io';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import passport from './services/passport';
import config from '../config';
import SocketEvents from './socket-events';
import routes from './routes';

class ApiSocketServer {
  constructor() {
    this.app = express();
    this.MongoStore = connectMongo(session);
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

  useMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.app.use(passport.session());
    this.app.use(session({
      resave: false,
      saveUninitialized: false,
      secret: 'secret',
      store: new this.MongoStore({
        url: config.MONGO_URI,
        autoReconnect: true
      })
    }));
    this.app.use((err, req, res, next) => res.status(500).send({error: err.message}));
  }

  listen(port = 3001) {
    this.connectMongoDB();
    this.useMiddlewares();
    routes(this.app);
    new SocketEvents(this.io).attach();
    this.http.listen(port);
  }
}

export default new ApiSocketServer();