import React from 'react';
import PropTypes from 'prop-types';

import {Footer, Container} from 'react-materialize';
import Header from '../shared/Header';

const MainLayout = ({children}) => (
  <div className="main-wrapper">
    <Header/>
    <Container>
      { children }
    </Container>
    <Footer copyrights="&copy; 2015 Copyright Text"/>
  </div>
);

MainLayout.PropTypes = {
  children: PropTypes.node
};

export default MainLayout;
