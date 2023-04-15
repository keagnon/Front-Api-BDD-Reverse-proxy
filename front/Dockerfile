FROM node:18.14.2
ENV CI=true
ENV PORT=3000
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app
CMD [ "npm", "start" ]