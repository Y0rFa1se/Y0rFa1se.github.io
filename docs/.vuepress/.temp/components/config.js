import { hasGlobalComponent } from "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";

import "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
