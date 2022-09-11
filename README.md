## To run the project, correctly install the sharing modules in the root directory

```bash
   yarn install
```

## To run the project, in the root directory use:

```bash
   yarn start
```

## Modules installation

## yarn workspace <workspace_name> <command>

### This will run the chosen Yarn command in the selected workspace. Example:

```javascript
yarn workspace @bbards-ts/front-end add react react-dom --dev
```

## This will add react and react-dom as devDependencies in your packages/@bbards-ts/front-end/package.json.

### If you want to remove a package:

```javascript
yarn workspace web-project remove some-package
```

## Available Scripts for front-end

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Swaggier API

Runs the app in the development mode.\
Open [http://localhost:8080/api-docs/](http://localhost:8080/api-docs/) to view it in the browser.

Take a look at our [CONTRIBUTING](https://github.com/Bartek-Figat/tsx-react/blob/main/CONTRIBUTING.md) file to learn how to get started with gitflow.

[Application demo](https://bartek-figat.github.io/tsx-react/)
