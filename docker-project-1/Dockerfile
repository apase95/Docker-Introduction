FROM node:20-slim
WORKDIR /usr/src/app

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

COPY package.json pnpm-lock.yaml ./
COPY . .

ENV WELCOME_MESSAGE="Welcome to NestJS Docker!"

EXPOSE 3000
CMD ["node", "dist/main"]