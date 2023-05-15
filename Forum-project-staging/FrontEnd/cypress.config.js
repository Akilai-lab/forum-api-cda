import { defineConfig } from "cypress";
// import  db  from "./cypress/fixtures/cypress.json";
const sqlServer = require('cypress-sql-server');
// import sqlServer from 'cypress-sql-server';
sqlServer.loadDBCommands();
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // const db = require('./cypress/fixtures/cypress.json');
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    },
  },
});
