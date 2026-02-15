# Building layer
FROM node:23-alpine AS development

WORKDIR /app

# Copy configuration files
COPY ./package.json ./
COPY ./yarn.lock ./

# Install dependencies
RUN yarn

COPY ./index.html ./
COPY ./tsconfig.json ./
COPY ./tsconfig.app.json ./
COPY ./tsconfig.node.json ./
COPY ./vite.config.ts ./
COPY ./eslint.config.js ./
COPY ./src ./src
COPY ./.env ./.env
COPY ./public ./public
COPY ./components.json ./components.json
COPY ./postcss.config.js ./postcss.config.js
COPY ./tailwind.config.js ./tailwind.config.js

RUN yarn build
# Runtime (production) layer
FROM nginx:stable-alpine AS production

WORKDIR /app

COPY --from=development /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# # Expose application port
# EXPOSE 3000

# Start application
CMD ["nginx", "-g", "daemon off;"]
