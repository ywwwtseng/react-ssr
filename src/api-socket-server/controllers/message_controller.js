import Message from '../models/message';

export default {
  messages(req, res, next) {
    Message.find()
      .select('-__v')
      .populate({ path: 'author', select: ['username', 'photo'] })
      .then(messages => res.send(messages));
  },
};