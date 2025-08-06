import markdown
from markdown.extensions import codehilite

def convert_md_to_html(title, md_content):
    md = markdown.Markdown(extensions=['codehilite', 'fenced_code'])
    html_converted = md.convert(md_content)

    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    <script>
        MathJax = {{
            tex: {{inlineMath: [['$', '$'], ['\\(', '\\)']]}},
            svg: {{fontCache: 'global'}}
        }};
    </script>
</head>
<body>
    <h1>{title}</h1>
    <a href="index.html">Back</a>
    <br>
    <br>
    {html_converted}
</body>
</html>
"""
    return html_content