import React from 'react';
import {Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
  <header>
    <Row>
      <Navbar brand='Thinknetica' right>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    </Row>
  </header>
);

export default Header;
