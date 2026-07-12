# AstroSync Landing Website — July 2026

Static production website for [astrosync.in](https://astrosync.in).

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
