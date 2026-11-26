FROM node:26-alpine AS builder

WORKDIR /workspace

RUN npm install --global pnpm@10.34.5

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @game-platform/frontend build

FROM nginx:1.27-alpine

COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/apps/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]