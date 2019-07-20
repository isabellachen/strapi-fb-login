import React from 'react';
import { Link } from 'react-router-dom';
import url from '../url';

const SecurePage = ({ match }) => {
  const randomPage = match.params.randomPage;
  return (
    <div>
      <h1>Welcome to {randomPage}</h1>
      <Link to={url.home}>Go back to Home</Link>
    </div>
  );
};

export default SecurePage;
