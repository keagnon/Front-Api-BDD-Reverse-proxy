# Front-Api-BDD-Reverse-proxy
L'objectif de ce projet est de faire un docker-compose, une api, une base de données,un front, un backoffice et un reverse proxy


Le fichier YAML décrit la configuration d'un environnement Docker Compose contenant plusieurs services : une API, une base de données MariaDB, une application Frontend et un serveur proxy Nginx.

- La partie "services" du fichier YAML décrit chaque service et ses caractéristiques, y compris la configuration de la construction des images, la configuration des environnements et des volumes, et les dépendances entre les services.

- Le service "api" utilise le Dockerfile présent dans le contexte actuel (".") pour construire l'image Docker, qui dépend du service "db" (la base de données) et s'expose sur le port 8080. Il définit également une variable d'environnement "url" pour définir l'URL de connexion à la base de données MariaDB.

- Le service "db" utilise l'image Docker MariaDB, déclare les variables d'environnement nécessaires pour initialiser la base de données, y compris le mot de passe root, et définit deux volumes pour stocker les données de la base de données et les scripts d'initialisation.

- Le service "front" construit une image Docker à partir d'un fichier Dockerfile situé dans le dossier "front". Il utilise également des volumes pour monter le code source et les dépendances de l'application dans le conteneur Docker, et s'expose sur le port 3000.

- Le service "proxy" utilise l'image Docker Nginx, publie le port 80 pour accéder à la page web, monte le fichier de configuration nginx.conf pour configurer le serveur proxy et déclare les dépendances à "api" et "front".

Enfin, le fichier YAML définit un volume "db_data" pour stocker les données de la base de données.

En utilisant Docker Compose, cet environnement peut être facilement créé et déployé en utilisant la commande "docker-compose up -d --build".

Remarques : 
Il est possible que lors du premier build, l'API prenne entre 2 et 4 minutes avant de se lancer. Cela est normal car durant le premier build, la base de données est créée et toutes ses données sont migrées via les scripts fournis, ce qui peut prendre du temps. Il y a également un healthcheck à valider sur la base de données avant que l'API puisse se lancer. Pour les lancements suivants, cela ne devrait pas prendre autant de temps car la base de données est déjà créée.

Dans le cas où l'API ne se lance pas du premier coup lors du premier build, il suffit de la relancer une seconde fois. La connexion est refusée car la base de donnée est en train de se reconstruire avec les scripts fournis.