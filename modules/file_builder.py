from jinja2 import Template

import os

def initializer(tab_title, page_title):
    os.makedirs("docs", exist_ok=True)

    pages = [page.replace(".md", "").replace(" ", "-") for page in os.listdir("pages")]

    with open(os.path.join("templates", "index.html")) as f:
        template_content = f.read()
        template = Template(template_content)
        index_content = template.render(tab_title=tab_title, page_title=page_title, files=pages)

    with open(os.path.join("docs", "index.html"), "w", encoding="utf-8") as f:
        f.write(index_content)
