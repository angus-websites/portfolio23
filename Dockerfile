# Use the official Node image
FROM node:18.19-alpine as base
WORKDIR /usr/src/portfolio

# Install stage: Install dependencies into temp directory
FROM base AS install
RUN mkdir -p /temp/build/
COPY package.json /temp/build/
WORKDIR /temp/build/
RUN npm install

# Prerelease (build) stage: Copy source code and build in the temp directory
FROM base AS prerelease
COPY --from=install /temp/build/node_modules /temp/build/node_modules
COPY . /temp/build/
WORKDIR /temp/build
ENV NODE_ENV=production
RUN npm run build

# Release stage: Copy production dependencies and source code into final image
FROM oven/bun:slim AS release
COPY --from=prerelease /temp/build/.output ./
COPY --from=prerelease /temp/build/package.json ./
COPY --from=prerelease /temp/build/prod.sh start.sh

# Run the app
EXPOSE 3000/tcp

# Copy our prod script and set permissions
CMD /bin/sh start.sh

