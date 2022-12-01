// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
     settings: {
        defaultFrom: 'admin@provitask.com',
        testAddress: 'juliasedefdjian@strapi.io',
      },
    },
  },
  // ...
});
