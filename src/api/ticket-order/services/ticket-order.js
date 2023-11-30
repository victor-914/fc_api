'use strict';

/**
 * ticket-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticket-order.ticket-order');
