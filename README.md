## Local preview

```bash
npx serve@latest ./src
```

## Deploy to GitHub Pages

The site deploys automatically from `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The published root is the `src/` directory.

### One-time GitHub setup

1. Open **Settings → Pages** for [hyperjumptech/typetable.io](https://github.com/hyperjumptech/typetable.io/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `typetable.io` and save. GitHub will verify DNS and provision HTTPS.

The `src/CNAME` file keeps the custom domain in sync with the repository.

### DNS for typetable.io

Point the domain at GitHub Pages:

| Host       | Type    | Value                     |
| ---------- | ------- | ------------------------- |
| `@` (apex) | `A`     | `185.199.108.153`         |
| `@`        | `A`     | `185.199.109.153`         |
| `@`        | `A`     | `185.199.110.153`         |
| `@`        | `A`     | `185.199.111.153`         |
| `www`      | `CNAME` | `hyperjumptech.github.io` |

Optional IPv6 (`AAAA`) records for the apex:

- `2606:50c0:2000::153`
- `2606:50c0:2001::153`
- `2606:50c0:2002::153`
- `2606:50c0:2003::153`

After DNS propagates, enable **Enforce HTTPS** in the Pages settings if it is not already on.
