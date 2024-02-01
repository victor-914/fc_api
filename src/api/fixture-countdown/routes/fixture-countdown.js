'use strict';

/**
 * fixture-countdown router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fixture-countdown.fixture-countdown');
