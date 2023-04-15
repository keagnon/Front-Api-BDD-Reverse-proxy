# Front-Api-BDD-Reverse-proxy
L'objectif de ce projet est de faire un docker-compose, une api, une base de données,un front, un backoffice et un reverse proxy


Pour lancer le docker compose faire un :

docker-compose up -d --build

pour un premier build il se peut que l'api mette 2-4 minute avant de se lancer c'est normal. Car, dans le premier build, le temps que la base de données ce crée et migre toute ses données via les scripts fournie prend 2-4 min il y a un healthcheck à valider sur la bdd avant que l'api ce lance. Pour les lancement suivant il devrait pas durée aussi longtemps vu que la base de donnée est déjà crée.
si l'api ne se lance pas du premier coup lors du premier build veillez juste la relancer une seconde fois la connection est refuser car la base de donnée et en train de se reconstruire avec les script fournie.
