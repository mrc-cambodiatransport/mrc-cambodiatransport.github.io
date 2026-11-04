# CLAUDE.md

Website for Mr. C's Cambodia Transport and Tours, a small tourist transport business in Phnom Penh
(tuk-tuk, car and minivan services). Live at https://www.mrc-cambodiatransport.com (GitHub Pages, custom domain via `CNAME`).
The owner of the repo builds it as a favor for a friend, so keep things simple and low-maintenance.

## Working rules

- **Never commit or push unless the user explicitly asks.** The user wants to verify changes first.
- Do not use broad git index commands (`git reset`, `git rm --cached .`, `git add -A` at the root). The user often has
  work staged or untracked. Commit with explicit pathspecs: `git commit -m "..." -- <paths>`.
- Leave untracked work alone unless asked: `img/photocollection/`, new images in `img/mrc/`, `.idea/`.

## Stack

- Jekyll 4.3 (plain `jekyll` gem plus `webrick`; the `github-pages` gem is no longer used).
- Bootstrap 5.3.3 loaded from the jsDelivr CDN in `_includes/head.html` and `_includes/js.html` (no SRI hashes yet).
- Agency theme styles ported to Bootstrap 5 in `_includes/css/agency.css`, served as `/style.css` via
  `style.css` and `_layouts/style.css`. Colors come from `_config.yml` (`color:`).
- `js/agency.js` is a small vanilla-JS file (shrinking navbar, scrollspy, closes the mobile menu). No jQuery.
- Fonts from Google Fonts over HTTPS.
- Deployed by GitHub Actions (`.github/workflows/pages.yml`) on every push to `master`. Repo setting
  Pages > Source is set to "GitHub Actions". Check build failures in the repo's Actions tab.

## Run locally

```
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. `Gemfile.lock` was deleted during the upgrade; the first `bundle install` creates a new one,
which should be committed.

## Content

The site is one landing page (`_layouts/default.html`) assembled from includes: header, services, testimonials,
contact, footer. Services and testimonials are Jekyll posts in `_posts/` selected by `category`:

- Services: `category: services`, image in `img/mrc/`, text in the `description` front matter.
- Testimonials: `category: testimonial`, image in `img/testimonials/`. See README.md for the exact format.
- Contact details (email, phone numbers, Facebook link) are hard-coded in `_includes/contact.html` and `_config.yml`.
- Each post also builds its own pretty-URL page that renders the full landing page (existing behavior, not a bug
  introduced by the upgrade).

## Removed on purpose

Dead PHP contact form and its JavaScript (there is no backend on GitHub Pages), Universal Analytics (shut down by Google),
Font Awesome, jQuery, and the unused `modals.html` / `about.html` includes. `_plugins/hex_to_rgb.rb` is now unused.

## Known issues and ideas

- The first build after the upgrade was only verified by the user on GitHub; the upgrade was written without a local build.
- `_posts/photos.markdown` and `_posts/_photo-gallery.html` have no date in the filename, so Jekyll skips them.
  The photo gallery is unfinished work.
- Possible follow-ups: self-host Bootstrap and fonts instead of CDNs, add GA4 (needs a measurement ID),
  add SRI hashes, clean up the unused plugin.
