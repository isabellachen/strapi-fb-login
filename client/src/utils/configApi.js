const authenticateStrapiWithProvider = (provider) => {
  return `${process.env.REACT_APP_API_URL}/connect/${provider}`;
} 

const authenticateAppWithStrapi = (provider, search) => {
  return `${process.env.REACT_APP_API_URL}/auth/${provider}/callback${search}`;
}

export default {
  authenticateStrapiWithProvider,
  authenticateAppWithStrapi
}
