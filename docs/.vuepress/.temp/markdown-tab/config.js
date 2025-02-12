import { CodeTabs } from "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
  },
};
