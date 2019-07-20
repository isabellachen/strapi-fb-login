import React from 'react';
import { Link } from 'react-router-dom';
import url from '../url';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Try to access a protected url by either changing the url from the
        browser or by clicking on the <Link to={url.toRandomPage}>link</Link>
      </p>
    </div>
  );
};

export default HomePage;
