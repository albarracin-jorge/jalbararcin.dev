# --- Build stage: compile the static site with pnpm ---
FROM node:22-slim AS build
WORKDIR /app

# pnpm pinned to the same version as package.json "packageManager".
# Installed globally with npm: in the official node image the global bin dir is
# already on PATH, and node 22 satisfies pnpm's engine requirement.
RUN npm install -g pnpm@11.20.0

# Install dependencies first to leverage Docker layer caching.
# pnpm-workspace.yaml is needed so approved native build scripts (esbuild, sharp) run.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static output into /app/dist
COPY . .
RUN pnpm run build

# --- Runtime stage: serve the static output (/es/, /en/) with nginx ---
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
