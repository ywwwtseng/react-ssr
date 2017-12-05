import mongoose, { Schema } from 'mongoose';

const ChannelSchema = Schema({
  owners: [{
    type: Schema.Types.ObjectId,
    ref: 'user'
  }],

  public: {
    type: Boolean,
    default: false
  },

  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'message'
  }]
});

const Channel = mongoose.model('channel', ChannelSchema);

export default Channel;
