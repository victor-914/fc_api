'use strict';

/**
 * ticket-fixture service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticket-fixture.ticket-fixture');
