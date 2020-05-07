import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

// we can also use props down here in the ()
const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header-content">
        <Link className ="header-title" to="/dashboard" exact={true}><h1>Budget Manager</h1></Link>
        <h1 className="logout-button" onClick = {props.startLogout}>
          logout
        </h1>
      </div>
    </div>
  </header>
);

const mapStatetoProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapStatetoProps)(Header);
