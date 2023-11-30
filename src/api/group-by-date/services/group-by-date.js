'use strict';

/**
 * group-by-date service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::group-by-date.group-by-date');
