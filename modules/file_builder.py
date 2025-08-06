import os

def initializer():
    os.makedirs("docs", exist_ok=True)

    pages = [page.replace(".md", "") for page in os.listdir("pages")]
    pages_template = ""
    
    for page in pages:
        pages_template += f"<li><a href='{page}.html'>{page}</a></li>\n"

    index_content = f"""
<!DOCTYPE html>
<html>
<head>
    <title>안녕하세요😘<title>
</head>
<body>
    <h1>안녕하세요😘</h1>
    <ul>
        {pages_template}
    </ul>
</body>
</html>
"""

    with open("/docs/index.html", "w", encoding="utf-8") as f:
        f.write(index_content)
