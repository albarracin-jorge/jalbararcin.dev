#Este dockerfile solo es para levantar en un contenedor de nginx la carpeta de produccion (dist)
FROM nginx:alpine
COPY ./dist /usr/share/nginx/html