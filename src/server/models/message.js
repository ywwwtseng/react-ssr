import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  time: {
    type: Date,
    default: Date.now
  },

  content: {
    type: String,
    required: true
  }
});

const Message = mongoose.model('message', MessageSchema);

export default Message;