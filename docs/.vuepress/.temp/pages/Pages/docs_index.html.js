import comp from "/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/docs_index.html.vue"
const data = JSON.parse("{\"path\":\"/Pages/docs_index.html\",\"title\":\"Docs\",\"lang\":\"en-US\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"Pages/docs_index.md\"}")
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
