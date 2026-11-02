# AstroSync Landing Website — July 2026

Static production website for [astrosync.in](https://astrosync.in).

## Local Preview

No build step or package installation is required:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. Local preview does not send Google Analytics events.
The homepage uses self-hosted Fraunces and Space Grotesk fonts, official store
badges, and app screenshots from the October 2026 store assets. Font licenses are
included in `assets/fonts`.

The App Store and Google Play links are ordinary links and work without JavaScript.
Do not push preview changes to `main` until approved: a push deploys automatically.

## Stable public URLs

- `https://astrosync.in/privacy-policy.html`
- `https://astrosync.in/terms-of-service.html`
- `https://astrosync.in/app-ads.txt`
- `https://astrosync.in/og-image.png`

These paths are intentionally preserved for App Store, Google Play, AdMob, and social-preview integrations.

## Deployment

Pushes to `main` use the same S3 and AWS Amplify deployment workflow as the original landing-page repository.

The repository requires these GitHub Actions secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AMPLIFY_APP_ID`
