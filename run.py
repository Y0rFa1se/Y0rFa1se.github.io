from modules.md2html import convert_md_to_html
from modules.file_builder import initializer

import os

TAB_TITLE = "안녕하세요😘"
INDEX_PAGE_TITLE = "Github Pages ✋🏻"

def main():
    initializer(TAB_TITLE, INDEX_PAGE_TITLE)

    for filename in os.listdir("pages"):
        with open(os.path.join("pages", filename), "r", encoding="utf-8") as f:
            md_content = f.read()
            filename = filename.replace(".md", "")
            html_content = convert_md_to_html(filename, md_content)

            with open(os.path.join("docs", f"{filename}.html"), "w", encoding="utf-8") as html_file:
                html_file.write(html_content)

if __name__ == "__main__":
    main()