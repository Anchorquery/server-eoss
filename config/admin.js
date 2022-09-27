
const forgotPasswordTemplate = require('./email-templates/forgot-password');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  forgotPassword: {
    from: 'joangelr5@gmail.com',
    replyTo: 'joangelr5@gmail.com',
    emailTemplate: forgotPasswordTemplate,
  },
});
