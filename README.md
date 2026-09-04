# Venkat Portfolio

Static portfolio website with an integrated **Ask AI** page.

## Routes

- `/` — About
- `/experience.html` — Experience
- `/projects/` — Projects and case studies (canonical)
- `/contact.html` — Contact
- `/ask-ai/` — Ask Venkat AI frontend

`/projects.html` is kept only as a backwards-compatible redirect to `/projects/`.

## Configure Ask AI

Before production deployment, edit:

`assets/js/ask-ai-config.js`

Set:

```js
window.ASK_VENKAT_API_BASE = "https://api.yourdomain.com";
```

Use the hostname where the separate Ask Venkat Cloudflare Worker is deployed.

## Deployment

This project is static and can be connected directly to Cloudflare Pages from GitHub. No build command is required. The output/root directory is the repository root.

## Before publishing

- Replace placeholder GitHub/profile URLs if still present.
- Add the resume file expected by the resume download link.
- Decide how the contact form should submit; it is currently static.
- Replace `api.yourdomain.com` in `ask-ai-config.js` after the API hostname is known.
