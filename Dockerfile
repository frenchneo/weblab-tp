FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY files/ /usr/share/nginx/html/

RUN apt-get update && apt-get install -y apache2-utils
RUN htpasswd -b -c /etc/nginx/.htpasswd admin password123
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80