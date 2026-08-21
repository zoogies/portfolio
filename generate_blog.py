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
    image: media/thing.png     # relative paths are made absolute
    image_alt: Alt text for the share image (defaults to the title).
    card: summary_large_image     # opt in to the big banner card
    ---

Share images resolve in this order:
    1. the frontmatter "image:" key
    2. media/og/<slug>.(png|jpg|jpeg|webp), if present
    3. DEFAULT_OG_IMAGE

Every post gets the small horizontal card (thumbnail beside the text), which
suits a square image. Add "card: summary_large_image" to a post to promote it
to the full-width banner — that one wants a 1200x630 image.
"""

import os
import re
import html
import markdown
from datetime import datetime

BLOG_DIR = "blog"
INDEX_HTML = "index.html"
BASE_URL = "https://zmuda.dev"
AUTHOR = "Ryan Zmuda"
SITE_NAME = "zmuda.dev"
THEME_COLOR = "#1ba8b5"
DEFAULT_OG_IMAGE = f"{BASE_URL}/media/headshot.jpg"
OG_IMAGE_DIR = os.path.join("media", "og")
OG_IMAGE_EXTS = ("png", "jpg", "jpeg", "webp")

GTM_HEAD = """\
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N9R7R4XK');</script>
    <!-- End Google Tag Manager -->"""

GTM_BODY = """\
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N9R7R4XK"
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
    <meta name="theme-color" content="{theme_color}">
    <meta property="og:site_name" content="{site_name}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{og_desc}">
    <meta property="og:image" content="{og_image}">
    <meta property="og:image:alt" content="{og_image_alt}">
    <meta property="og:url" content="{BASE_URL}/blog/{slug}.html">
    <meta property="og:type" content="article">
{article_meta}    <meta name="twitter:card" content="{twitter_card}">
    <link rel="icon" type="image/jpeg" sizes="32x32" href="../media/headshot.jpg">
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
        <header class="post-header">
            <p class="back-link"><a href="/">← zmuda.dev</a></p>
        </header>
        <main>
            <article>
                <h1 class="post-title">{title}</h1>
                <div class="post-meta">
{meta_lines}                </div>
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
    """Pull plain text from the first non-empty prose paragraph for og:description.

    Media blocks (figures, embedded posts, scripts) are dropped whole so a post
    that opens with an image still describes itself with real prose.
    """
    clean = re.sub(r'```.*?```', '', body, flags=re.DOTALL)
    for tag in ("figure", "blockquote", "script", "style", "figcaption"):
        clean = re.sub(rf'<{tag}\b.*?</{tag}>', '', clean, flags=re.DOTALL | re.IGNORECASE)
    clean = re.sub(r'<[^>]+>', ' ', clean)
    clean = re.sub(r'^#{1,6}\s+', '', clean, flags=re.MULTILINE)
    clean = re.sub(r'!\[.*?\]\(.*?\)', '', clean)
    clean = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', clean)
    clean = re.sub(r'`[^`]+`', '', clean)
    clean = re.sub(r'[*_]{1,2}([^*_]+)[*_]{1,2}', r'\1', clean)
    clean = html.unescape(clean)
    for para in clean.split('\n\n'):
        text = ' '.join(para.split()).strip()
        if text:
            return text[:max_len].rstrip() + ('…' if len(text) > max_len else '')
    return ""


def absolutize(url):
    """Share images must be absolute URLs — scrapers do not resolve relative paths."""
    if url.startswith(("http://", "https://", "//")):
        return url
    return f"{BASE_URL}/{url.lstrip('/')}"


def find_slug_image(slug):
    """Look for a per-post share image at media/og/<slug>.<ext>."""
    for ext in OG_IMAGE_EXTS:
        path = os.path.join(OG_IMAGE_DIR, f"{slug}.{ext}")
        if os.path.exists(path):
            return f"{BASE_URL}/{OG_IMAGE_DIR.replace(os.sep, '/')}/{slug}.{ext}"
    return None


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

        custom_image = meta.get("image") or find_slug_image(slug)
        og_image     = absolutize(custom_image) if custom_image else DEFAULT_OG_IMAGE
        og_image_alt = meta.get("image_alt") or title
        # Small horizontal card by default; opt in per-post with "card: summary_large_image".
        twitter_card = meta.get("card", "summary")

        article_meta = ""
        if date_str:
            article_meta = f'    <meta property="article:published_time" content="{date_str}">\n'
        article_meta += f'    <meta property="article:author" content="{AUTHOR}">\n'

        html_body = markdown.markdown(body, extensions=["fenced_code", "tables", "attr_list"])

        meta_parts = []
        if date_display:
            meta_parts.append(f'                    <p class="post-date-line">{date_display}</p>')
        meta_parts.append(f'                    <p class="post-byline"><a href="/">{AUTHOR}</a></p>')
        meta_lines = "\n".join(meta_parts) + "\n"

        output = POST_TEMPLATE.format(
            title=html.escape(title),
            slug=slug,
            meta_lines=meta_lines,
            content=html_body,
            og_desc=html.escape(og_desc),
            og_image=html.escape(og_image),
            og_image_alt=html.escape(og_image_alt),
            article_meta=article_meta,
            twitter_card=twitter_card,
            site_name=SITE_NAME,
            theme_color=THEME_COLOR,
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
