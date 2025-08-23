FROM node:22-alpine AS build
# Créer un repertoire virtuel 
WORKDIR /app
# Copier dans les dossiers package.json package-lock.json ./
# lancer le build 
RUN npm cache clean --force
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod

 
### STAGE 2:RUN test ####### 
FROM nginx:1.24-alpine AS ngi
# deployer le code pour le reutiliser 
COPY --from=build /app/dist/newSiteWeb/ /usr/share/nginx/html
RUN chmod 755 -R /usr/share/nginx/html
 
# Copy Nginx configuration and ssl certificate
COPY ./nginx-config/conf.d  /etc/nginx/conf.d
COPY ./nginx-config/saga  /etc/ssl/saga