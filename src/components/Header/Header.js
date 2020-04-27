import React, { Component } from 'react';
import './Header.css';
import Logo from '../../Images/logo.png';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="headerBody">
        <nav className="navbar">
          <NavLink to="/" className="bgv">
            <img src={Logo} alt="bgv" />
          </NavLink>
          <div className="routes">
            <NavLink
              to="/TenantSearch"
              className="btn btn-primary"
              activeStyle={{ color: '#fff' }}
            >
              <i className="fa fa-search"></i> Tenant Search
            </NavLink>
            <NavLink
              to="/LandlordFeedback"
              className="btn btn-primary"
              activeStyle={{ color: '#fff' }}
            >
              Landlord Feedback Form
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
