# Holistic Legal Advocacy Website

Multi-page nonprofit website for HOLISTIC LEGAL ADVOCACY.

## Pages

- `index.html` - Home
- `about.html` - Organization mission and details
- `services.html` - Programs overview
- `news.html` - News and updates
- `cases.html` - Case studies
- `contact.html` - Contact page with Formspree-ready submission form

## Required Organization Info Included

- EIN: `99-4219778`
- Organization Name (DBA): `HOLISTIC LEGAL ADVOCACY`
- Principal Officer: `Logan Miller`
- Address: `2321 Belmont Dr, Anchorage, AK 99517`
- Contact Email: `info@holisticlegaladvocacy.us`
- Official Website: `https://holisticlegaladvocacy.us`

## Formspree Setup

The contact form is already wired for Formspree and uses JavaScript fetch submission with success/error feedback.

1. Create a form endpoint in Formspree.
2. Open `contact.html`.
3. Replace:

```html
action="https://formspree.io/f/your-form-id"
```

with your real endpoint, for example:

```html
action="https://formspree.io/f/abcdwxyz"
```

4. Save and deploy.

## Run Locally

Open `index.html` in a browser, or serve the folder with any static server.