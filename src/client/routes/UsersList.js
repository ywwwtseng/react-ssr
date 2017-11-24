import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import { Helmet } from "react-helmet";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderUsers() {
    return this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ));
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
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
  component: connect(state => ({ users: state.users }), { getUsers })(UsersList)
};