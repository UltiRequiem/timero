# Timero

See what time it is in any time zone.

**Live: https://timero.ultirequiem.com**

Type a city or a zone, press _Random Time Zone_, browse the full list, or share a link with `?tz=Tokyo`.

## Development

```sh
pnpm install
pnpm dev      # local server with hot reload
pnpm test     # unit tests for the time zone helpers
pnpm build    # production build into dist/
```

Built with [Vite](https://vite.dev), TypeScript and [`@ultirequiem/timezones`](https://www.npmjs.com/package/@ultirequiem/timezones).
Every push to `main` is built and deployed to GitHub Pages; the domain comes from `public/CNAME`.

## Licence

Licensed under the MIT License 📄
