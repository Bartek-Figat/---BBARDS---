---
sidebar_position: 6
---

# Customizing

If you want, you can adjust configuration options for your needs.

## Changing ports

Open docker-compose.yml file, then change ports in backend and/or frontend section.

```yml
version: '3.8'
services:
  database:
    image: mongo:6
    networks:
     - bbards-network
    ports:
      - '27017-27019:27017-27019'
    restart: on-failure
    container_name: 'bbards-database'
    env_file:
      - ./.env
  backend:
    build:
      dockerfile: Dockerfile
      context: ./packages/backEnd
    networks: 
      - bbards-network
    depends_on:
      - database
    ports:
      - '8080:8080'
    restart: on-failure
    container_name: 'bbards-backend'
    volumes:
      - ./packages/backEnd/:/packages/backEnd/
      - backEnd_node_modules:/packages/backEnd/node_modules
    env_file:
      - ./.env
  frontend:
    build:
      dockerfile: Dockerfile
      context: ./packages/frontEnd
    networks: 
      - bbards-network
    ports:
      - '3000:3000'
    restart: on-failure
    container_name: 'bbards-frontend'
    volumes:
      - ./packages/frontEnd/:/packages/frontEnd/
      - frontEnd_node_modules:/packages/frontEnd/node_modules
    env_file:
      - ./.env
networks:
 bbards-network:
  name: bbards-network

volumes:
  backEnd_node_modules:
  frontEnd_node_modules:
```
