from modules.page_renderer import title_formatter, render_index, render_page

import os
import shutil

pjoin = os.path.join

TITLE = "My Pages"
BASE = "/Projects/Y0rFa1se.github.io/docs/"

def main():
    shutil.rmtree("docs", ignore_errors=True)
    os.makedirs("docs", exist_ok=True)
    shutil.move("pages/assets", "docs")

    for (path, dirs, files) in os.walk("pages"):
        base_url = path[6:]
        os.makedirs(pjoin("docs", base_url), exist_ok=True)

        for dir in dirs:
            pages = [title_formatter(p) for p in os.listdir(pjoin(path, dir))]
            title = title_formatter(dir)
            index_html = render_index(BASE, title, pjoin(base_url, dir)+"/", pages)

            with open(pjoin("docs", base_url, title+".html"), "w") as f:
                f.write(index_html)
        
        for file in files:
            with open(pjoin(path, file)) as f:
                md_content = f.read()
                title = title_formatter(file)
                page_html = render_page(BASE, title, md_content)

            with open(pjoin("docs", base_url, title+".html"), "w") as f:
                f.write(page_html)

    pages = []
    for file in os.listdir("docs"):
        if file.endswith(".html"):
            pages.append(title_formatter(file))

    index_html = render_index(BASE, TITLE, "", pages)

    with open(pjoin("docs", "index.html"), "w") as f:
        f.write(index_html)

    shutil.copytree("docs/assets", "pages/assets", dirs_exist_ok=True)

if __name__ == "__main__":
    main()