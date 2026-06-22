# Shi Junjie Website

Jekyll-based personal research blog for GitHub Pages.

## Structure

```text
.
├── _config.yml
├── CNAME
├── index.html
├── blog.html
├── research.html
├── notes.html
├── projects.html
├── about.html
├── _layouts/
│   ├── default.html
│   ├── page.html
│   └── post.html
├── _includes/
│   ├── header.html
│   └── footer.html
├── _posts/
├── _drafts/
├── _templates/
│   └── post-template.md
└── assets/
    ├── css/styles.css
    └── img/
        ├── profile.jpg
        ├── profile.png
        └── ...
```

## Profile image

The homepage prefers `assets/img/profile.jpg`. If that file is not present, it falls back to `assets/img/profile.png`, then to the `SJ` initials placeholder.

## Publish a blog post

1. Copy `_templates/post-template.md`.
2. Rename it using this format:

```text
_posts/YYYY-MM-DD-post-title.md
```

Example:

```text
_posts/2026-06-22-my-first-research-note.md
```

3. Edit the front matter:

```yaml
---
layout: post
title: "My First Research Note"
date: 2026-06-22
summary: "Short summary."
categories: [research]
---
```

4. Write the post content below the front matter using Markdown.
5. Commit and push to GitHub.

## Draft a blog post

Put unfinished posts in `_drafts/`:

```text
_drafts/post-title.md
```

When ready to publish, move the file into `_posts/` and rename it with a date:

```text
_posts/YYYY-MM-DD-post-title.md
```

## GitHub Pages setup

For the repository `shijunjie07.github.io`:

1. Place these files in the repository root.
2. Go to `Settings → Pages`.
3. Use `Deploy from a branch`.
4. Select `master` and `/ root`.
5. Set custom domain to `shijunjie.tech`.

The included `CNAME` file already contains:

```text
shijunjie.tech
```

## Local preview

Install Ruby and Jekyll, then run:

```bash
bundle exec jekyll serve
```

If you do not use Bundler, you can run:

```bash
jekyll serve
```
