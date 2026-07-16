# Selam Mission — Ethiopia ministry website

A starter React site for a mission ministry based in Ethiopia. "Selam Mission" and all
copy in the site are **placeholders** — swap them for your real organization name, story,
and photos.

## Design

- **Palette**: parchment/cream background, deep highland green, meskel gold, wine red,
  muted clay — colors drawn from Ethiopian landscape, church, and coffee-ceremony
  imagery rather than a generic template look.
- **Type**: Fraunces (display serif) for headings, Work Sans (body) for everything else.
- **Signature element**: `src/components/CrossMotif.jsx` — a hand-built SVG echoing
  Lalibela's carved processional crosses, used as a recurring anchor across the site.

## Running it in VS Code

1. Open this folder in VS Code (`File → Open Folder…`).
2. Open a terminal in VS Code (`` Ctrl+` `` / `` Cmd+` ``).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open the printed local URL (usually `http://localhost:5173`) in your browser. The
   page hot-reloads as you edit files.

## Project structure

```
src/
  components/
    Navbar.jsx        top navigation, mobile menu
    Footer.jsx         site footer
    CrossMotif.jsx     signature SVG cross motif
    SectionLabel.jsx   small eyebrow label used above section headings
  pages/
    Home.jsx
    About.jsx
    Ministries.jsx
    GetInvolved.jsx
    Contact.jsx
  App.jsx              routes
  main.jsx             app entry point
  index.css            global styles + Tailwind
```

## Things to do before this goes live

- [ ] Replace "Selam Mission" and all placeholder copy with your real name and story.
- [ ] Add real photos (currently there are none — the design is intentionally text/motif-led).
- [ ] Wire up the contact form in `src/pages/Contact.jsx` to an actual email service,
      e.g. [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) —
      right now it only shows a placeholder "sent" message.
- [ ] Add a real donation link/processor to the "Give" card on the Get Involved page.
- [ ] Update contact details in `Footer.jsx` and `Contact.jsx`.
- [ ] Consider adding a favicon and social preview image.

## Deploying

This is a static site once built. `npm run build` outputs a `dist/` folder you can deploy
to Netlify, Vercel, GitHub Pages, or any static host.
