import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import React, { useEffect, useReducer } from 'react';

import ConnectContainer from './containers/ConnectContainer';
import ProtectedRoute from './containers/ProtectedRoute';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import SecurePage from './pages/SecurePage';
import NotFoundPage from './pages/NotFoundPage';
import url from './url';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={url.home} component={HomePage} />
        <Route exact path={url.auth.authType.id} component={AuthPage} />
        <Route
          exact
          path={url.connect.provider}
          component={withRouter(ConnectContainer)}
        />
        <ProtectedRoute
          exact
          path={url.randomPage}
          component={withRouter(SecurePage)}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
