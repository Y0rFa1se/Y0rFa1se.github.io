from modules.page_renderer import render_index, render_page

import os
import shutil

TITLE = "My Pages"

def main():
    shutil.rmtree("docs", ignore_errors=True)
    os.makedirs("docs", exist_ok=True)
    shutil.move("pages/assets", "docs")

    for (path, dirs, files) in os.walk("pages"):
        print(path, dirs, files)

    shutil.copytree("docs/assets", "pages/assets", dirs_exist_ok=True)

if __name__ == "__main__":
    main()