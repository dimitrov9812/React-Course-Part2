import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Budget App</h1>
          <NavLink to="/" activeClassName="is-active" exact={true}>ExpenseDashboard</NavLink><br/>
          <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink><br/>
          <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
    </header>
  );

  export default Header;