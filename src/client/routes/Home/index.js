import { compose } from 'recompose';
import lifecycle from 'recompose/lifecycle';
import { connect } from 'react-redux';
import Home from './Home';
import requireAuth from '../../components/hocs/requireAuth';
import { getUsers } from '../../actions';

const enhance = compose(
  requireAuth,

  connect(
    ({ users }) => ({ users }),
    { getUsers }
  ),

  lifecycle({
    componentDidMount() {
      this.props.getUsers();
    }
  }),
);

export default {
  component: enhance(Home),
  loadData: ({ dispatch }) => dispatch(getUsers())
};