'use strict';

/**
 * fixture-countdown service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fixture-countdown.fixture-countdown');
