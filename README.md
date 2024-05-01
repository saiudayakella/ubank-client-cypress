# Ubank client cypress tests

This repository sets up a cypress framework (in JS) for `Ubank` client portal by implementing Page object model design pattern.

## Scenarios automated

Visit Ubank home page

AND

### Scenario 1

- Verify user is able to navigate to login page

### Scenarios 2 & 3

- Verify user is able to search content (valid text & invalid text)

**Note:**

- For simplicity purpose, fixed search text

## Prerequisites

Cypress requires Node.js in order to install. Supported node versions:

- Node.js 18.x
- Node.js 20.x and above

For mode information on system requirements:

- Refer https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

## Setup

1. Clone the repository (or) Unzip the project
2. Open terminal
3. Navigate to the project root folder and install the dependencies:

```console
$ npm i
```

## Run the tests

There are 2 options:

### GUI mode

1. Open terminal and navigate to the project root folder
2. Invoke the below command:

```console
$ npm run cy:open
```

(OR)

```console
$ npx cypress open --browser chrome --e2e
```

2. Select the spec `homePageUserActions.cy.js` in cypress test runner to execute the tests

### From the Commandline

1. Open terminal and navigate to the project root folder
2. Invoke the below command:

```console
$ npm run cy:run
```

(OR)

```console
$ npx cypress run --browser chrome
```

**Note:**

1. When cypress tests are run from the commandline:

- Tests are run in headless mode by default
- Mochawesome html report (`report.html`) gets generated under `../reports/mochawesome` folder

2. When cypress is launched for the first time in GUI mode, initialising config could take a few seconds for connecting to the specified browser (which is set to chrome in this project)

3. Pages are present under `cypress/pages` and corresponding spec to validate scenarios is present under `cypress/e2e` folder
