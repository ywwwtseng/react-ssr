import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthButton = ({ auth }) => {
  if ( auth ) {
    return <a href="/api/logout">Logout</a>;
  } else {
    return <a href="/api/auth/google">Login</a>;
  }
};

const Header = ({ auth }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">React SSR</Link>
      <ul className="right">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        <li>
          <AuthButton auth={auth} />
        </li>
      </ul>
    </div>
  </nav>
);

function mapStateToPorps({ auth }) {
  return { auth };
}

export default connect(mapStateToPorps)(Header);