import Message from '../models/message';

export default {
  messages(req, res, next) {
    Message.find()
      .select('-_id')
      .select('-__v')
      .then(messages => res.send(messages));
  },
};