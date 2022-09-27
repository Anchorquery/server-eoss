// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        apiKey: env('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'),
      },
      settings: {
        defaultFrom: 'admin@provitask.com',
        testAddress: 'juliasedefdjian@strapi.io',
      },
    },
  },
  // ...
});
