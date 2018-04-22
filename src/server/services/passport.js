import passport from 'passport';
import User from '../models/user';
import Local from 'passport-local';

// SerializeUser is used to provide some identifying token that can be saved
// in the users session.  We traditionally use the 'ID' for this.
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// The counterpart of 'serializeUser'.  Given only a user's ID, we must return
// the user object.  This object is placed on 'req.user'.
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new Local.Strategy(
  function (username, password, done) {
    const comparePassword = user => user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) { return done(null, user); }

      return done(null, false, 'Invalid credentials.');
    });

    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      // if (!user) { return done(null, false, 'Invalid Credentials'); }
      if (!user) {
        const user = new User({ username, password });
        return user.save().then(user => comparePassword(user));
      }

      return comparePassword(user);
    });
  }
));

export default passport;