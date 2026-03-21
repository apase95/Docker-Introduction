# Stage 1
FROM node:20-slim AS builder
WORKDIR /usr/src/app 

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2
FROM node:20-slim
WORKDIR /usr/src/app

RUN npm install -g pnpm
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# ------------------------------------------------------------------------- #
ENV WELCOME_MESSAGE="Welcome to NestJS Docker!"
EXPOSE 3000
CMD ["node", "dist/main"]