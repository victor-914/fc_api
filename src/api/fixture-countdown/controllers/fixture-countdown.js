'use strict';

/**
 * fixture-countdown controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fixture-countdown.fixture-countdown');
