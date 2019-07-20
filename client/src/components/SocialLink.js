import React from 'react';
import configApi from '../utils/configApi';

const SocialLink = ({ provider }) => {
  const link = configApi.authenticateStrapiWithProvider(provider);
  return <a href={link}>{provider}</a>;
};

export default SocialLink;
