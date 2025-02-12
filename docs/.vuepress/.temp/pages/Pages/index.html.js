import comp from "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/Pages/\",\"title\":\"Pages\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Pages\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
