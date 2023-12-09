# Stage 1 - build
FROM oven/bun:1 as build
WORKDIR /app
COPY package.json bun.lockb ./
RUN  bun --bun install --frozen-lockfile
COPY . .
ENV NODE_ENV=production
RUN bun --bun run build

# Stage 2 - production
FROM node:8.15-alpine AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.ts .
COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/static ./output
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["npm", "start"]