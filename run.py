from modules.page_renderer import render_index, render_page

import os
import shutil

TITLE = "My Pages"

def main():
    shutil.rmtree("docs", ignore_errors=True)
    os.makedirs("docs", exist_ok=True)
    shutil.move("pages/assets", "docs")

    for (path, dirs, files) in os.walk("pages"):
        if path.startswith("pages/images"):
            continue
        elif path.startswith("pages/assets"):
            continue

        print(path, dirs, files)

if __name__ == "__main__":
    main()