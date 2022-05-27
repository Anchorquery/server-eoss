'use strict';

/**
 * bank-information service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bank-information.bank-information');
