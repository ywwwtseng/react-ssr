import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../../actions';

export default ChildComponent => {
  class RequireAuth extends React.Component {
    constructor(props) {
      super(props);

      props.getCurrentUser();
    }

    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/login" />;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps, { getCurrentUser })(RequireAuth);
};