import React from 'react';
import PropTypes from 'prop-types';
import {Footer} from 'react-materialize';
import Header from '../shared/Header';

const MainLayout = ({children}) => (
  <div className="main-wrapper">
    <Header/>
    <main>
      { children }
    </main>
    <Footer copyrights="&copy; 2017 Copyright Text"/>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
