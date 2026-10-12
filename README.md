# Foresee

Landing page and sign-in for Foresee, an AI launch red team that finds what could fail before a launch goes live.

## Pages

- `index.html` is the landing page, with the live demo, risk dashboard, Creative Red Team, Launch Crystal, contradictions and the launch-review popup.
- `signin.html` is the sign-in and sign-up page.

Both are self-contained static files with fonts and images inlined. They need no build step and work on any static host (Vercel, Netlify, GitHub Pages).

## Configuration

- `window.FORESEE_FORM_ENDPOINT`: set this on `index.html` to receive launch-review sign-ups. Each submission is POSTed as JSON. Without it, leads are kept only in the visitor's browser.
- `window.FORESEE_APP_URL`: set this on `signin.html` to send people to the real platform after sign-in. It defaults to `https://app.foresee.ai`.

## Preview helpers

- `index.html?thanks` opens the thank-you screen.
- `index.html#review` opens the launch-review popup.
- `signin.html#signup` opens in sign-up mode.
- `?nostop` disables the scroll soft-stop.
