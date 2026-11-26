# Intern portal + admin panel at portal.a1itinnovation.com.np (VPS, host port 8093 → NPM).
# Same build as www: the app shows the portal when the host name starts with "portal.".
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY deploy/nginx-portal.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
