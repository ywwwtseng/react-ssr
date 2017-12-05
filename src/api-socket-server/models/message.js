import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },

  time: {
    type: Date,
    required: true
  },

  content: {
    type: String,
    required: true
  }
});

const Message = model('message', MessageSchema);

export default Message;