FROM node:26-alpine AS builder

WORKDIR /workspace

RUN npm install --global pnpm@10.34.5

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @game-platform/backend build
RUN pnpm --filter @game-platform/backend --prod deploy /prod

FROM node:26-alpine

WORKDIR /app

COPY --from=builder /prod/package.json ./package.json
COPY --from=builder /prod/node_modules ./node_modules
COPY --from=builder /workspace/apps/backend/dist ./dist

EXPOSE 3000
CMD ["node", "dist/main.js"]