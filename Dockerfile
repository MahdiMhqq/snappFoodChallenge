FROM node:16-alpine AS build
ENV NODE_ENV production
WORKDIR /app

COPY package*.json ./
RUN npm ci
RUN npm i -g craco
COPY . ./
RUN npm run build

FROM node:16-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm prune --production

FROM node:16-alpine
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules/
COPY --from=build /app/build/ ./build/
EXPOSE 3000
ENTRYPOINT ["npx"]
CMD ["serve", "-s", "build"]