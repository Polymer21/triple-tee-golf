# TripleTee Golf — Founders Club

Static landing page for the Founders Club, built from the desktop 1440 frame (V2). Plain HTML and CSS. Open `index.html`, or serve this directory.

Photos are compressed WebP versions of the supplied stand-in images. Placeholder copy (`[City]`, `[Date TBD]`, `X of 20`, `from $—`) is kept as designed.

## GitHub Pages

Pages is not turned on. Two ways to publish from the repository root, when you want to:

1. **Deploy from a branch.** Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` and `/ (root)`. `.nojekyll` is included so Jekyll does not rewrite the site.
2. **GitHub Actions.** Settings → Pages → Source: GitHub Actions, then run the **Deploy to GitHub Pages** workflow (`.github/workflows/pages.yml`). The workflow is manual so it does not fail before Pages is enabled.
