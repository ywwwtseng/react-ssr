import User from './models/user';
import Message from './models/message';

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

      // Get messages
      socket.on('messages', () => {
        Message.find()
          .select('-__v')
          .populate({ path: 'author', select: ['username', 'photo'] })
          .then(messages => this.io.emit('messages-response', { error: false, data: messages }));
      });

      // Send message
      socket.on('send-message', ({ content }) => {
        const message = new Message({ author: socket.userId, content });
        message.save(err => {
          Message.find()
            .select('-__v')
            .populate({ path: 'author', select: ['username', 'photo'] })
            .then(messages => this.io.emit('messages-response', { error: false, data: messages }));
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