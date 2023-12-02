"use strict";
/**
 * product-order controller
 */
const { v4: uuidv4 } = require("uuid");

const { createCoreController } = require("@strapi/strapi").factories;
// module.exports = createCoreController('api::product-order.product-order');
module.exports = createCoreController(
  "api::product-order.product-order",
  ({ strapi }) => ({
    async create(ctx) {
      const user = ctx.state.user;

      if (!user) {
        return ctx.unauthorized("You are not authorized!");
      }

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
              title: ctx?.request?.body?.data?.title,
              customer_name: ctx?.request?.body?.data?.customer_name,
              customer_email: ctx?.request?.body?.data?.customer_email,
              total_price: ctx?.request?.body?.data?.total_price,
              status: ctx?.request?.body?.data?.status,
              customer_phoneNumber:
                ctx?.request?.body?.data?.customer_phoneNumber,
              quantity: ctx?.request?.body?.quantity,
              tracker_id: uuidv4(),
              users: ctx?.state?.user?.id,
              products: ctx.request.body?.data?.products?.map(
                (item) => item.id
              ),
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
