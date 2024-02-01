"use strict";
/**
 * product-order controller
 */
const { v4: uuidv4 } = require("uuid");

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController(
  "api::product-order.product-order",
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized("You are not authorized!");
      }

      try {
        // Create the order
        const order = await strapi
          .service("api::product-order.product-order")
          .create({
            data: {
              title: ctx?.request?.body?.title,
              total_price: ctx?.request?.body?.total_price,
              gatewayRef_id: ctx?.request?.body?.gatewayRef_id,
              gateway_response: ctx?.request?.body?.gateway_response,
              session_id: uuidv4(),
              users: ctx.state.user.id,
              quantity: ctx?.request?.body?.quantity,
              gender: ctx?.request?.body?.gender,
              size: ctx?.request?.body?.size,
              portal: ctx?.request?.body?.portal,
              price: ctx?.request?.body?.price,
            },
          });

       
        return order;
      } catch (err) {
        // console.log("🚀 ~ create ~ err:", err);
        ctx.response.status = 500;
        return {
          error: { message: "There was a problem creating the charge" },
        };
      }
    },
  })
);
