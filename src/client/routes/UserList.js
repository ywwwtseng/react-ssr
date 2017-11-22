import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/index';

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}


function loadData(store) {
  return store.dispatch(getUsers());
}

export default {
  loadData,
  component: connect(state => ({ users: state.users }), { getUsers })(UserList)
};