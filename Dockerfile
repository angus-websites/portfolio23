# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:latest as base
WORKDIR /usr/src/app


FROM base AS install

# install dependencies into temp directory
RUN mkdir -p /temp/build
COPY package.json bun.lockb /temp/build/
RUN cd /temp/build && bun install --frozen-lockfile


FROM base AS prerelease
COPY --from=install /temp/build/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun --bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=prerelease /usr/src/app/.output .
COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
