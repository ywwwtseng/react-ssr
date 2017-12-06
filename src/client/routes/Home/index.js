import { compose } from 'recompose';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import { connect } from 'react-redux';
import Home from './Home';
import requireAuth from '../../components/hocs/requireAuth';
import { getUsers } from '../../actions';
import io from '../../socket-client';

const enhance = compose(
  requireAuth,

  connect(
    ({ users }) => ({ users }),
    { getUsers }
  ),

  withState(
    'socket',
    'setSocket',
    null
  ),

  lifecycle({
    componentDidMount() {
      const socket = io({ query: `userId=${this.props.auth._id}` });
      this.props.setSocket(socket);
      this.props.getUsers(socket);
    },

    componentWillUnmount() {
      this.props.socket.emit('logout');
    },
  }),
);

export default {
  component: enhance(Home),
  loadData: ({ dispatch }) => dispatch(getUsers())
};