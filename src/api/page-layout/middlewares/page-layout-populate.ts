/**
 * `page-layout-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navigationItems: true,
    },
  },
  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navigationItems: true,
      socialLinks: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.

  return async (ctx, next) => {
    // console.log(ctx.query);

    ctx.query.populate = populate;
    strapi.log.info("In page-layout-populate middleware.");

    await next();
  };
};
