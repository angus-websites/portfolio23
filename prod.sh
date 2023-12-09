#!/bin/sh

# Create .env file from environment variables
printenv | awk -F "=" 'NF==2 && $2 !~ /[\n\t ]/' > server/.env

# Finally, run bun
bun run server/index.mjs