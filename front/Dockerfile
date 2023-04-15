# On part de l'image Docker "node" version 18.14.2
FROM node:18.14.2

# On définit deux variables d'environnement
# "CI=true" permet de lancer les tests en mode "CI"
# "PORT=3000" définit le port d'écoute de l'application
ENV CI=true
ENV PORT=3000

# On définit le dossier de travail de l'application
WORKDIR /app

# On copie les fichiers "package.json" et "package-lock.json"
# dans le dossier de travail
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# On lance la commande "npm ci" pour installer les dépendances
# de l'application
RUN npm ci

# On copie tous les fichiers du répertoire courant dans le dossier
# de travail de l'application
COPY . /app

# On définit la commande à lancer pour démarrer l'application
# "npm start" lance la commande "start" du fichier "package.json"
CMD [ "npm", "start" ]
