export default {
  current_user(req, res, next) {
    const { _id, username, online } = req.user;

    res.send({ _id, username, online });
  }
};