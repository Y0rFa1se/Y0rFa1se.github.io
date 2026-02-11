window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    enableMenu: false,
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  linebreaks: {
    inline: true,
    display: true,
    width: '100%',
    overflow: 'linebreak'
  },
  startup: {
    typeset: false
  }
};

document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})