import User from './models/user';

class SocketEvents {
  constructor(io) {
    this.io = io;
  }

  registerMiddlewares() {
    this.io.use(function (socket, next) {
      next();
    });
  }

  socketEvents() {
    this.io.on('connection', (socket) => {

      // Get the user's list
      socket.on('user-list', ({ userId }) => {

        let userListResponse = {};

        if (!userId) {

          userListResponse.error = true;
          userListResponse.message = 'User does not exits.';
          this.io.emit('user-list-response', userListResponse);

        } else {

          User
            .find()
            .select('-password')
            .select('-__v')
            .then(users => {
              userListResponse.error = false;
              userListResponse.data = users;
              this.io.emit('user-list-response', userListResponse);
            });

        }

      });
    });
  }

  attach() {
    this.registerMiddlewares();
    this.socketEvents();
  }
}

export default SocketEvents;