/**
 * page-layout router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::page-layout.page-layout", {
  config: {
    find: {
      middlewares: ["api::page-layout.page-layout-populate"],
    },
  },
});
