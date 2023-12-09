# Use the official Bun image
FROM oven/bun:slim as base
WORKDIR /usr/src/portfolio

# Install & build stage
FROM base AS install
RUN mkdir -p /temp/build
COPY package.json bun.lockb /temp/build/
WORKDIR /temp/build
RUN bun install
COPY . /temp/build/
ENV NODE_ENV=production
RUN bun run build

# Release stage: Copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/build/.output .
COPY --from=install /temp/build/package.json .
COPY --from=install /temp/build/prod.sh start.sh

# Run the app
EXPOSE 3000/tcp

# Copy our prod script and set permissions
CMD /bin/sh start.sh

