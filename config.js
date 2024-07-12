const defaultAuthConfig = {
  cacheLocation: 'localstorage',
  authorizationParams: {
    scope: 'openid profile email',
  },
};

const config = {
  auth: {
    ...defaultAuthConfig,
    domain: 'maroon-locust-81445.cic-demo-platform.auth0app.com',
    clientId: 'prHIwfJT5V6NIRqLhnhxlUPbiGcSdsbs',
    // UNCOMMENT the following line to test the private API
    audience: ['api://authrocks/'],
  },
  app: {
    enableSilentAuth: false,
    port: 3000,
  },
  server: {
    permissions: ['authRocks'],
  },
};

export default config;
