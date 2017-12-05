import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default url => session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  store: new MongoStore({
    url,
    autoReconnect: true
  })
});
