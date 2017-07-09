import React from 'react';
require('./stylesheets/main.scss');
import {
  BrowserRouter,
  Switch
} from 'react-router-dom';
import {map} from 'lodash';
import routes from 'routes';

import MainLayout from 'components/layouts/MainLayout';
import RouteWithSubRoutes from 'helpers/routes/RouteWithSubRoutes';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        {
          map(routes(), (route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))
        }
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
