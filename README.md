# LASU Recommendation App (Frontend)

A LASU Recommendation App — a small, responsive UI built with Next.js and Tailwind CSS (or similar). This repository contains the app shell, header and logo components.

## Features

- Next.js 13+ (App Router)
- Google Font (Roboto) integrated in layout
- Simple component structure for header and logo

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or yarn/pnpm)

## Quick Start (Windows)

1. Clone repository
   ```
   git clone https://github.com/nUnitecch/LASUWEBAPP-Frontend.git
   cd LASUWEBAPP-Frontend
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run development server
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Available scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run start` — start production server (after build)
- `npm run lint` — run linters (if configured)
- `npm run test` — run tests (if configured)

Adjust scripts based on your package.json.

## Project structure (important files)

- app/layout.tsx — global layout, font import and metadata ([open file](app/layout.tsx))
- app/page.tsx — home page entry ([open file](app/page.tsx))
- app/\_components/Logo.tsx — logo component ([open file](app/_components/Logo.tsx))
- app/\_components/header/index.tsx — header component ([open file](app/_components/header/index.tsx))

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit changes: `git commit -m "feat: add ..."`
4. Push and open a PR

Follow repository coding standards and keep changes focused.

## Troubleshooting

- Port already in use: stop other dev server or change port (e.g., `PORT=3001 npm run dev` on Windows PowerShell use `$env:PORT=3001; npm run dev`).
- Missing dependencies: run `npm install`.

## License

Specify a license (e.g., MIT) or contact the project owner.

## Contact

For questions, open an issue in this repository.
