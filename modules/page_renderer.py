import markdown
from markdown.extensions import codehilite
from jinja2 import Template

import os

def render_index(title: str, base_url: str, pages: list[str]):
    with open(os.path.join("templates", "index.html")) as f:
        template_content = f.read()
        template = Template(template_content)
        
    return template.render(title=title, base_url=base_url, pages=pages)

def render_page(title: str, md_content: str):
    md = markdown.Markdown(extensions=['codehilite', 'fenced_code'])
    html_converted = md.convert(md_content)

    with open(os.path.join("templates", "page.html")) as f:
        template_content = f.read()
        template = Template(template_content)
        
    return template.render(title=title, html_converted=html_converted)
