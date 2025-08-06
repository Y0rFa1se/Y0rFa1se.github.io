import markdown
from markdown.extensions import codehilite
from jinja2 import Template

import os

def convert_md_to_html(title, md_content):
    md = markdown.Markdown(extensions=['codehilite', 'fenced_code'])
    html_converted = md.convert(md_content)

    with open(os.path.join("templates", "page.html")) as f:
        template_content = f.read()
        template = Template(template_content)
        html_content = template.render(page_title=title, html_converted=html_converted)

    return html_content