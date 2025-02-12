import { hopeTheme } from "vuepress-theme-hope";
import { sidebar } from "./sidebar.js";

export default hopeTheme({
  markdown: {
    components: true,
    math: {
      type: "katex",
    },
    lineNumbers: false,
    codeTabs: true,
  },

  navbar: ['/', '/get-started.md'],
  sidebar,
  sidebarDepth: 2,
  sidebarAutoCollapse: true,

  darkMode: false,
  backToTop: true,
});