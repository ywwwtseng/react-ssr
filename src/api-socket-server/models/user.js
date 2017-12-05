import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },

  logged: {
    type: Boolean,
    default: false
  },
  
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) { return next(); }

  // generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      // overwrite plain text password encrypted password
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default model('user', UserSchema);