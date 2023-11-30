'use strict';

/**
 * teammate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teammate.teammate');
