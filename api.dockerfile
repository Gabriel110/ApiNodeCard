FROM node:latest
COPY . /var/ww
WORKDIR /var/ww
RUN npm install
ENTRYPOINT npm run migrate && npm run dev
EXPOSE 3000
