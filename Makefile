prod:
	PYTHONIOENCODING=utf8 docker-compose -f docker/docker-compose.yml up -d --build --remove-orphans

dev:
	PYTHONIOENCODING=utf8 docker compose -f docker/docker-compose-dev.yml down --remove-orphans \
	&& docker compose -f docker/docker-compose-dev.yml build --pull \
	&& docker compose -f docker/docker-compose-dev.yml up -d

dev-stop:
	docker compose --file 'docker-compose-dev.yml' --project-name 'fara-front-dev' restart

# make yarn-add PACK='package name'
yarn-add:
	docker compose -f docker/docker-compose-dev.yml run --rm fara-front-dev yarn add ${PACK}
	
yarn-remove:
	docker compose -f docker/docker-compose-dev.yml run --rm fara-front-dev yarn remove ${PACK}
