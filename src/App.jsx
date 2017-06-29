import React from 'react';
require('./stylesheets/main.scss');

import {BrowserRouter, Route} from 'react-router-dom';
import BlogPage from 'components/containers/BlogPage';
import MainLayout from 'components/layouts/MainLayout';
import AboutPage from 'components/containers/AboutPage';
import PostShow from 'components/containers/PostShow';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path="/" render={({match, location, history}) => (
        <BlogPage match={match}
                  location={location}
                  history={history}/>
      ) }/>
      <Route exact path="/about" component={ AboutPage }/>
      <Route exact path="/posts/:id" render={({match}) => (
        <PostShow id={match.params.id} />
      )} />
    </MainLayout>
  </BrowserRouter>
);

export default App;
