import React, { useState, useEffect } from 'react';

import Router from './Router';
import './App.css';

function App() {
  const [baseUrl, updateBaseUrl] = useState('');

  useEffect(() => {
    let redirectUrlToNativeApp = localStorage.getItem('redirectUrl');
    if (redirectUrlToNativeApp) {
      updateBaseUrl(redirectUrlToNativeApp);
    } else {
      const qs = decodeURIComponent(document.location.search);
      if (qs) {
        const urlToRedirectBackToNativeApp = qs.split('?linkingUri=')[1];
        updateBaseUrl(urlToRedirectBackToNativeApp);
        localStorage.setItem('redirectUrl', urlToRedirectBackToNativeApp);
      }
    }
  }, [baseUrl]);

  return (
    <div className="App">
      <a href={baseUrl}>click me</a>
      <Router />
    </div>
  );
}

export default App;
