import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Header = () => (
  <header className="row">
    <Navbar brand='Thinknetica' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
  </header>
);

export default Header;
