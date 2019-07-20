export default {
  home: '/',
  auth: {
    authType: {
      id: '/auth/:authType/:id?'
    },
    login: 'auth/login'
  },
  connect: {
    provider: '/connect/:provider'
  },
  randomPage: '/:randomPage',
  toRandomPage: `/${String(Math.random())}`
};
