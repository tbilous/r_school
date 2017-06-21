import React from 'react';
import {Navbar, Row} from 'react-materialize';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header>
    <Row>
      <Navbar brand='Thinknetica' right>
        <li>
          <NavLink exact to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact to='/about'>About</NavLink>
        </li>
      </Navbar>
    </Row>
  </header>
);

export default Header;
