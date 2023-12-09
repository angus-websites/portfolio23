FROM oven/bun:1 as build

# set work dir as app
WORKDIR /app
# copy package.json and bun.lock files to working directory
COPY package.json bun.lockb ./
# install all the project dependencies as production
RUN  bun --bun install --frozen-lockfile
# copy all other project files to working directory
COPY . ./
ENV NODE_ENV=production
# build the nuxt project to generate the artifacts in .output directory
RUN bun --bun run build

# we are using multi stage build process to keep the image size as small as possible
FROM node:18-alpine3.17
# update and install latest dependencies, add dumb-init package
# add a non root user
RUN adduser -D nuxtuser
# set non root user
USER nuxtuser

# set work dir as app
WORKDIR /app
# copy the output directory to the /app directory from 
# build stage with proper permissions for user nuxt user
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./
# expose 8080 on container
EXPOSE 3000

# set app host and port . In nuxt 3 this is based on nitro and you can read
#more on this https://nitro.unjs.io/deploy/node#environment-variables
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

ENTRYPOINT ["node", ".output/server/index.mjs"]