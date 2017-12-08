import { compose } from 'recompose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import { connect } from 'react-redux';
import Home from './Home';
import requireAuth from '../../components/hocs/requireAuth';
import { getUsers, getMessages } from '../../actions';
import io from '../../socket-client';

const enhance = compose(
  requireAuth,

  connect(
    ({ auth, users, messages }) => ({ auth, users, messages }),
    { getUsers, getMessages }
  ),

  withState(
    'socket',
    'setSocket',
    null
  ),

  withHandlers({
    sendMessage: ({ socket }) => content => socket.emit('send-message', { content })
  }),

  lifecycle({
    componentDidMount() {
      const socket = io({ query: `userId=${this.props.auth._id}` });
      this.props.setSocket(socket);
      this.props.getUsers(socket);
      this.props.getMessages(socket);
    },

    componentWillUnmount() {
      this.props.socket.emit('logout');
    },
  }),
);

export default {
  component: enhance(Home),
  loadData: ({ dispatch }) => Promise.all([dispatch(getUsers()), dispatch(getMessages())])
};