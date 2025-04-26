/**
 * `page-layout-populate` middleware
 */

import type { Core } from "@strapi/strapi";

const populate = {
  Header: {
    populate: {
      Logo: {
        populate: {
          Image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navigationItems: true,
    },
  },
  Footer: {
    populate: {
      Logo: {
        populate: {
          Image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navigationItems: true,
      socialLinks: {
        populate: {
          Image: {
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
    console.log(ctx.query);

    ctx.query.populate = populate;
    strapi.log.info("In page-layout-populate middleware.");

    await next();
  };
};
