Game Platform monorepo using pnpm workspaces.

## Requirements

- Node.js 26 or newer
- pnpm 10.34.5

## Development

```sh
pnpm install
pnpm dev:frontend
pnpm dev:backend
```

The frontend is served on `http://localhost:5173`; the backend readiness endpoint is `http://localhost:3000/ready`.

## Checks

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Containers

```sh
docker build -f apps/backend/Dockerfile -t game-platform-backend .
docker run --rm -p 3000:3000 game-platform-backend

docker build -f apps/frontend/Dockerfile -t game-platform-frontend .
docker run --rm -p 8080:80 game-platform-frontend
```

The frontend is served on port `8080` and exposes `/ready`; the backend exposes `/ready` on port `3000`.
