# Special Event Designs Website

**Client project** — Standalone website for Special Event Designs. Managed by WebOps Development LLC.

A modern, elegant website for Special Event Designs - a premier event planning and floral design company specializing in weddings, corporate events, and serving as the official florist for the WM Phoenix Open.

- **Run locally:** Open `index.html` in a browser, or run `npm run serve` → http://localhost:3000 (or the port shown)

## Features

- **Hero Section** - Full-screen hero with the latest design and call-to-action
- **Services** - Wedding planning, corporate events, floral design, WM Phoenix Open
- **Why Choose Us** - 19 years of excellence, industry recognition, stress-free experience
- **Portfolio** - Featured events with hover overlays
- **Testimonials** - Client reviews with star ratings
- **Newsletter** - Email subscription form
- **Contact Form** - Name, email, message
- **Responsive** - Mobile-first, works on all devices
- **SEO** - Structured data, meta tags, semantic HTML

## Project Structure

```
Special Event Designs/
├── index.html       # Single-page site
├── css/             # Styles (variables, layout, components, etc.)
├── js/              # Scripts (navigation, animations, forms, SEO)
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

## Run locally

**Option 1 – Direct open**  
Open `index.html` in your browser. Some features (e.g. smooth scroll to anchors) work best with a local server.

**Option 2 – Local server**  
```bash
npm install
npm run serve
```
Then open the URL shown (e.g. http://localhost:3000).

## Customization

- **Colors:** Edit `css/variables.css` (primary red, accent green, gold).
- **Hero image:** Edit `css/layout.css` – `.hero__image` `background-image` URL.
- **Content:** Edit `index.html` (text, images, links).
- **Forms:** Connect contact and newsletter forms to your backend or email service.

## License

Copyright © Special Event Designs. All rights reserved.
