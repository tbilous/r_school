import React from 'react';
require('./stylesheets/main.scss');

import {BrowserRouter as Router, Route} from 'react-router-dom';
// import routes from 'routes';
import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';

const App = () => (
  <Router>
    <Route exact path="/" render={({match, location, history}) => (
      <MainLayout match={match}
                  location={location}
                  history={history}>
        <BlogPage/>
      </MainLayout>
    ) }/>
  </Router>
);

export default App;
