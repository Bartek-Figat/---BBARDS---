## Table of Contents

- [Download](#Download)
- [Installation](#Installation)
- [Docker compose](#Docker)
- [Modules](#Modules)
- [API Documentation](#API)
- [Contributing](#Contributing)
- [Application demo](https://bartek-figat.github.io/tsx-react/)

## Download

```bash
   https://github.com/Bartek-Figat/tsx-react.git
```

## Installation

Use the falwing script to install modules in the front-end and back-end directory

```bash
  yarn install
```

To run the project, in the root directory use.

The command will start the front-end and back-end

```bash
  yarn start
```

## Docker compose
If you want code using Docker, create `.env` file in root directory:

```bash
  MONGO_INITDB_ROOT_USERNAME=developer
  MONGO_INITDB_ROOT_PASSWORD=password
  MONGO_INITDB_DATABASE=bbardslocal
  dbDEV=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@database/${MONGO_INITDB_DATABASE}?retryWrites=true&w=majority&authSource=admin
```

Then run below in root directory

```bash
  docker compose up
```

Docker will bind ports:

3000 - Frontend

8080 - Backend

27017 - MongoDb

If you want to use other port, open and modify the file ```docker-compose.yml```

You can also run specific service:

```docker compose up backend``` - will run backend service and mongodb

```docker compose up frontend``` - will run frontend service

## Modules

Modules installation

```bash
  yarn workspace <workspace_name> <command>
```

Example:

```bash
  yarn workspace @bbards-ts/front-end add react react-dom --dev
```

If you want to remove a package:

```bash
  yarn workspace web-project remove some-package
```

## API

Swaggier API

Open [http://localhost:8080/api-docs/](http://localhost:8080/api-docs/) in the browser.

## Contributing

Take a look at our [CONTRIBUTING.md](https://github.com/Bartek-Figat/tsx-react/blob/main/CONTRIBUTING.md) file to learn how to get started with gitflow.
