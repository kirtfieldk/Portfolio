# EB platform select
FROM node:12.2.0
WORKDIR /app

COPY package.json .
RUN npm install
RUN npm install -g @angular/cli@7.3.9
COPY . .
RUN npm run build

FROM nginx:1.18.0-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist/bc-frontend /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]