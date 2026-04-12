#!/usr/bin/env python3
"""
Blog generator for zmuda.dev
Usage: python generate_blog.py
Requires: pip install markdown

Reads blog/*.md, generates blog/<slug>.html per post,
and updates the #blog section in index.html.

Frontmatter (optional --- block at top of .md):
    ---
    title: My Post Title
    date: 2026-04-11
    desc: Optional OG description (auto-extracted if omitted).
    image: https://optional-og-image.png
    ---
"""

import os
import re
import markdown
from datetime import datetime

BLOG_DIR = "blog"
INDEX_HTML = "index.html"
BASE_URL = "https://zmuda.dev"
DEFAULT_OG_IMAGE = f"{BASE_URL}/media/headshot.png"

GTM_HEAD = """\
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TXS337LK');</script>
    <!-- End Google Tag Manager -->"""

GTM_BODY = """\
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXS337LK"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->"""

POST_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="darkreader-lock">
    <meta name="color-scheme" content="dark">
    <title>{title} — Ryan Zmuda</title>
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{og_desc}">
    <meta property="og:image" content="{og_image}">
    <meta property="og:url" content="{BASE_URL}/blog/{slug}.html">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="{twitter_card}">
    <link rel="icon" type="image/png" sizes="32x32" href="../media/headshot.png">
    <link rel="stylesheet" href="../style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
{gtm_head}
</head>
<body>
{gtm_body}
    <div class="container">
        <header>
            <p class="back-link"><a href="/">← zmuda.dev</a></p>
        </header>
        <main>
            <article>
                <h1 class="post-title">{title}</h1>
                {date_line}
                <div class="post-content">
{content}
                </div>
            </article>
        </main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        <script>hljs.highlightAll();</script>
        <footer>
            <p>&copy; 2025-2026 Ryan Zmuda.</p>
        </footer>
    </div>
</body>
</html>
"""


def parse_frontmatter(text):
    """Parse optional --- block at top. Returns (meta dict, body string)."""
    if not text.startswith("---"):
        return {}, text
    try:
        end = text.index("---", 3)
    except ValueError:
        return {}, text
    front = text[3:end].strip()
    body = text[end + 3:].strip()
    meta = {}
    for line in front.splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            meta[k.strip()] = v.strip()
    return meta, body


def format_date(date_str):
    """Convert YYYY-MM-DD to 'Month D, YYYY' (no leading zero on day)."""
    try:
        dt = datetime.strptime(date_str, "%Y-%m-%d")
        return f"{dt.strftime('%B')} {dt.day}, {dt.strftime('%Y')}"
    except ValueError:
        return date_str


def extract_description(body, max_len=160):
    """Pull plain text from the first non-empty paragraph for og:description."""
    clean = re.sub(r'```.*?```', '', body, flags=re.DOTALL)
    clean = re.sub(r'^#{1,6}\s+', '', clean, flags=re.MULTILINE)
    clean = re.sub(r'!\[.*?\]\(.*?\)', '', clean)
    clean = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', clean)
    clean = re.sub(r'`[^`]+`', '', clean)
    clean = re.sub(r'[*_]{1,2}([^*_]+)[*_]{1,2}', r'\1', clean)
    for para in clean.split('\n\n'):
        text = ' '.join(para.split()).strip()
        if text:
            return text[:max_len].rstrip() + ('…' if len(text) > max_len else '')
    return ""


def generate():
    posts = []

    for fname in sorted(os.listdir(BLOG_DIR)):
        if not fname.endswith(".md"):
            continue

        slug = fname[:-3]
        with open(os.path.join(BLOG_DIR, fname), encoding="utf-8") as f:
            raw = f.read()

        meta, body = parse_frontmatter(raw)
        title        = meta.get("title", slug)
        date_str     = meta.get("date", "")
        date_display = format_date(date_str) if date_str else ""
        og_desc      = meta.get("desc") or extract_description(body)
        og_image     = meta.get("image") or DEFAULT_OG_IMAGE
        twitter_card = "summary_large_image" if meta.get("image") else "summary"

        html_body = markdown.markdown(body, extensions=["fenced_code", "tables"])
        date_line = f'<p class="post-meta">{date_display}</p>' if date_display else ""

        output = POST_TEMPLATE.format(
            title=title,
            slug=slug,
            date_line=date_line,
            content=html_body,
            og_desc=og_desc,
            og_image=og_image,
            twitter_card=twitter_card,
            gtm_head=GTM_HEAD,
            gtm_body=GTM_BODY,
            BASE_URL=BASE_URL,
        )

        with open(os.path.join(BLOG_DIR, slug + ".html"), "w", encoding="utf-8") as f:
            f.write(output)

        posts.append({"slug": slug, "title": title, "date": date_str, "date_display": date_display})
        print(f"  generated: blog/{slug}.html")

    posts.sort(key=lambda p: p["date"], reverse=True)

    if not posts:
        blog_html = (
            '<section id="blog">\n'
            '                <h2>Blog</h2>\n'
            '                <div class="blog-placeholder">\n'
            '                    <p class="blog-empty-text">Nothing, yet!</p>\n'
            '                </div>\n'
            '            </section>'
        )
    else:
        lines = []
        for p in posts:
            date_span = f'<span class="post-date">{p["date_display"]}</span>' if p["date_display"] else ""
            lines.append(
                f'                    <div class="blog-entry">'
                f'<a href="blog/{p["slug"]}.html">{p["title"]}</a>'
                f'{date_span}</div>'
            )
        blog_html = (
            '<section id="blog">\n'
            '                <h2>Blog</h2>\n'
            '                <div class="blog-list">\n'
            + "\n".join(lines) + '\n'
            '                </div>\n'
            '            </section>'
        )

    with open(INDEX_HTML, encoding="utf-8") as f:
        index = f.read()

    updated = re.sub(
        r'<section id="blog">.*?</section>',
        blog_html,
        index,
        flags=re.DOTALL,
    )

    with open(INDEX_HTML, "w", encoding="utf-8") as f:
        f.write(updated)

    print(f"  updated:   index.html ({len(posts)} post(s))")


if __name__ == "__main__":
    generate()
