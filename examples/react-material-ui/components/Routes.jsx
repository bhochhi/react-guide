import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router';

// import DashboardPageContainer from 'components/pages/dashboard/DashboardPageContainer';
// import Main from 'components/Main';
import App from '../containers/App';
const Routes = (
    <Route path="/" component={App}>
      <IndexRoute component={DashboardPageContainer} />
    </Route>
);

export default Routes;