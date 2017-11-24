import React from 'react';
import { connect } from 'react-redux';
import { getAdmins } from "../actions";
import requireAuth from '../component/hocs/requireAuth';

class AdminsList extends React.Component {
  componentDidMount() {
    this.props.getAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(mapStateToProps, { getAdmins })(requireAuth(AdminsList)),
  loadData: ({ dispatch }) => dispatch(getAdmins())
};