"use strict";

/**
 * product-order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::product-order.product-order",
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized("You are not authorized!");
      }

      // console.log(ctx.request.body.data);
      // console.log(ctx.state.user, "user");
      // console.log("order controller");

      const {
        title,
        customer_name,
        customer_email,
        total_price,
        status,
        customer_phoneNumber,
        quantity,
        products,
      } = ctx.request.body.data;

      try {
        //   // Charge the customer
        //   await stripe.charges.create({
        //     amount: amount,
        //     currency: "usd",
        //     description: `Order ${new Date()} by ${ctx.state.user.id}`,
        //     source: token,
        //   });

        // Create the order
        const order = await strapi
          .service("api::product-order.product-order")
          .create({
            data: {
              title,
              customer_name,
              customer_email,
              total_price, 
              status,
              customer_phoneNumber,
              quantity,
              users: ctx.state.user.id,
              products: products.map((item) => item.id),
            },
          });
        return order;
      } catch (err) {
        // return 500 error
        console.log("err", err);
        ctx.response.status = 500;
        return {
          error: { message: "There was a problem creating the charge" },
        };
      }
    },
  })
);
