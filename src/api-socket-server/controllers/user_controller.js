import User from '../models/user';

export default {
  current_user(req, res, next) {
    const { _id } = req.user;

    User.findByIdAndUpdate(_id, { $set: { online: true } }, (err, user) => {
      const { _id, username, online } = user;

      res.send({ _id, username, online });
    });
  },

  users(req, res, next) {
    User
      .find()
      .select('-password')
      .select('-__v')
      .then(users => res.send(users));
  }
};