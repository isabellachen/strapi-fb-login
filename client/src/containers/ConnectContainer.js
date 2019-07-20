/*
 * Strapi redirects to this page passing the token as a query string
 * http://localhost:3000/connect/${provider}/?access_toke=ABC...
 */

import React, { useState, useEffect } from 'react';
import auth from '../utils/auth';
import configApi from '../utils/configApi';

const ConnectContainer = props => {
  const { match, location, history } = props;
  const provider = match.params.provider;
  const search = location.search;

  const [authInfo, updateAuthInfo] = useState();

  const [baseUrl, updateBaseUrl] = useState('');

  useEffect(() => {
    let redirectUrlToNativeApp = localStorage.getItem('redirectUrl');
    if (redirectUrlToNativeApp) {
      updateBaseUrl(redirectUrlToNativeApp);
    }
  }, []);

  useEffect(() => {
    const requestURL = configApi.authenticateAppWithStrapi(provider, search);
    fetch(requestURL)
      .then(res => res.json())
      .then(json => updateAuthInfo(json));
  }, [provider, search]);

  useEffect(() => {
    if (authInfo) {
      const { user, jwt } = authInfo;
      window.location.href = `${baseUrl}/authToken=${jwt}&user=${user}`;
      auth.setToken(jwt);
      auth.setUser(user);
      history.push('/');
    }
  }, [authInfo, history, baseUrl]);

  return <div>Retrieving your token and checking validity</div>;
};

export default ConnectContainer;
