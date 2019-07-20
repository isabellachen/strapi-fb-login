import React from 'react';
import SocialLink from '../components/SocialLink';

const AuthPage = () => {
  const provider = 'facebook';
  return (
    <div>
      <div>You are not authenticated. Please authenticate with Facebook.</div>
      <SocialLink provider={provider} />
    </div>
  );
};

export default AuthPage;
