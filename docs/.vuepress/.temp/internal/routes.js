export const redirects = JSON.parse("{\"/_README.html\":\"/README.html\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Hi👋"} }],
  ["/README.html", { loader: () => import(/* webpackChunkName: "README.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/README.html.js"), meta: {"t":"Home"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"t":"Get Started"} }],
  ["/Pages/docs_index.html", { loader: () => import(/* webpackChunkName: "Pages_docs_index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/docs_index.html.js"), meta: {"t":"Docs"} }],
  ["/Pages/Major/Mathematics/Set%20Theory/Hausdorff%20Maximal%20Principle.html", { loader: () => import(/* webpackChunkName: "Pages_Major_Mathematics_Set Theory_Hausdorff Maximal Principle.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/Major/Mathematics/Set Theory/Hausdorff Maximal Principle.html.js"), meta: {"t":"Hausdorff Maximal Principle"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/Pages/", { loader: () => import(/* webpackChunkName: "Pages_index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/index.html.js"), meta: {"t":"Pages"} }],
  ["/Pages/Major/Mathematics/Set%20Theory/", { loader: () => import(/* webpackChunkName: "Pages_Major_Mathematics_Set Theory_index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/Major/Mathematics/Set Theory/index.html.js"), meta: {"t":"Set Theory"} }],
  ["/Pages/Major/Mathematics/", { loader: () => import(/* webpackChunkName: "Pages_Major_Mathematics_index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/Major/Mathematics/index.html.js"), meta: {"t":"Mathematics"} }],
  ["/Pages/Major/", { loader: () => import(/* webpackChunkName: "Pages_Major_index.html" */"/Users/rmrf/codes/Projects/Y0rFa1se.github.io/docs/.vuepress/.temp/pages/Pages/Major/index.html.js"), meta: {"t":"Major"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
