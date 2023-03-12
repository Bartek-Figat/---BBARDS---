![Screenshot 2021-09-09 at 10 08 54 PM](https://user-images.githubusercontent.com/67811830/198153675-2fe9e6ad-fa44-4a23-b93b-c922ff238a77.png)

## Table of Contents

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

- [Download](#Download)
- [Installation](#Installation)
- [Docker compose](#Docker)
- [Modules](#Modules)
- [API Documentation](#API)
- [Contributing](#Contributing)
- [Application demo](https://bartek-figat.github.io/---BBARDS---/)

## Download

```bash
   https://github.com/Bartek-Figat/---BBARDS---.git
```

## Installation

Use the following script to install modules in the front-end and back-end directory

```bash
  yarn install
```

To run the project, in the root directory use.

The command will start the front-end and back-end

```bash
  yarn start
```

## Docker

If you want to code using Docker, create `.env` file in root directory:

```bash
  MONGO_INITDB_ROOT_USERNAME=developer
  MONGO_INITDB_ROOT_PASSWORD=password
  MONGO_INITDB_DATABASE=bbardslocal
  dbDEV=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@database/${MONGO_INITDB_DATABASE}?retryWrites=true&w=majority&authSource=admin
```

Then run below in the root directory

```bash
  docker compose up
```

Docker will bind ports:

3000 - Frontend

8080 - Backend

27017 - MongoDb

If you want to use other ports, open and modify the file `docker-compose.yml`

You can also run specific services:

`docker compose up backend` - will run backend service and mongodb

`docker compose up frontend` - will run frontend service

## Modules

Modules installation

```bash
  yarn workspace <workspace_name> <command>
```

Example:

```bash
  yarn workspace @bbards-ts/front-end add react react-dom --dev
```

```bash
  yarn workspace @bbards-ts/back-end add cors
```

If you want to remove a package:

```bash
  yarn workspace web-project remove some-package
```

## API

Swaggier API

Open [http://localhost:8080/api-docs/](http://localhost:8080/api-docs/) in the browser.

## Contributing

Look at our [CONTRIBUTING.md](https://github.com/Bartek-Figat/tsx-react/blob/main/CONTRIBUTING.md) file to learn how to get started with gitflow.

## Contributors ✨

Thanks go to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/adrianixGit"><img src="https://avatars.githubusercontent.com/u/69733145?v=4?s=100" width="100px;" alt="adrianixGit"/><br /><sub><b>adrianixGit</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=adrianixGit" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://devopsowy.pl/"><img src="https://avatars.githubusercontent.com/u/11333925?v=4?s=100" width="100px;" alt="Bartlomiej Komendarczuk"/><br /><sub><b>Bartlomiej Komendarczuk</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=BElluu" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jsgostkowski"><img src="https://avatars.githubusercontent.com/u/93486712?v=4?s=100" width="100px;" alt="jsgostkowski"/><br /><sub><b>jsgostkowski</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=jsgostkowski" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kuprelweronika"><img src="https://avatars.githubusercontent.com/u/110784022?v=4?s=100" width="100px;" alt="kuprelweronika"/><br /><sub><b>kuprelweronika</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=kuprelweronika" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/masterHAWK99"><img src="https://avatars.githubusercontent.com/u/60447475?v=4?s=100" width="100px;" alt="masterHAWK99"/><br /><sub><b>masterHAWK99</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=masterHAWK99" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/namelessolo"><img src="https://avatars.githubusercontent.com/u/34840936?v=4?s=100" width="100px;" alt="Aleksander Skorek"/><br /><sub><b>Aleksander Skorek</b></sub></a><br /><a href="https://github.com/Bartek-Figat/bbards/commits?author=namelessolo" title="Documentation">📖</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!
