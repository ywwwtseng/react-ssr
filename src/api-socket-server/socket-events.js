import User from './models/user';

class SocketEvents {
  constructor(io) {
    this.io = io;
  }

  registerMiddlewares() {
    this.io.use((socket, next) => {
      socket.userId = socket.request._query['userId'];

      User.findByIdAndUpdate(socket.userId, { $set: { online: true } }, next);
    });
  }

  socketEvents() {
    this.io.on('connection', (socket) => {

      // Get the user's list
      socket.on('user-list', () => {

        if (!socket.userId) {

          this.io.emit('user-list-response', { error: true, message: 'User does not exits.' });

        } else {

          User.find()
            .select('-password')
            .select('-__v')
            .then(users => this.io.emit('user-list-response', { error: false, data: users }));

        }

      });

      // Logout the user
      socket.on('logout', () => socket.disconnect());

      // Socket disconnect
      socket.on('disconnect', () => {
        User.findByIdAndUpdate(socket.userId, { $set: { online: false } }, (err, user) => {
          User.find()
            .select('-password')
            .select('-__v')
            .then(users => this.io.emit('user-list-response', { error: false, data: users }));
        });

      });
    });
  }

  attach() {
    this.registerMiddlewares();
    this.socketEvents();
  }
}

export default SocketEvents;