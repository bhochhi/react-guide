import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

import DashboardPageContainer from './pages/dashboard/DashboardPageContainer';
import Main from './Main';
const Routes = (
    <Route path="/" component={Main}>
      <IndexRoute component={DashboardPageContainer} />
      
    </Route>
);

export default Routes;
