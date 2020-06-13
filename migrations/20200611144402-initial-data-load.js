'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.bulkInsert('projects', [
      {
        id: 1,
        name: 'Move Me',
        description: 'A simple game moving a character around a board.',
        gitHubLink: 'https://github.com/colleen-noel/Move-Me',
        apps: '["C#"]',
        pictureName: null,
      },
      {
        id: 2,
        name: 'Web Calculator',
        description: 'A calculator that calculates the four basic math operations.',
        gitHubLink: 'https://github.com/colleen-noel/web-calculator',
        apps: '["javascript","CSS", "HTML"]',
        pictureName: 'pictures/web-calculator.png',
      },
      {
        id: 3,
        name: 'TDD Strict Equality',
        description: 'Test driven development used to implement strict equality.',
        gitHubLink: 'https://github.com/colleen-noel/tdd-strict-equal',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 4,
        name: 'Fantasy Scoring',
        description: 'I created a function to calculate points for specific players in a fantasy football league.',
        gitHubLink: 'https://github.com/colleen-noel/fantasy-scoring',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 5,
        name: 'Password Validator',
        description: 'I created a function to validate a given password that meets a list of requirements.',
        gitHubLink: 'https://github.com/colleen-noel/password-validator',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 6,
        name: 'Hazy Calculator',
        description: 'I created a function that properly calculate given a set of rules to handle inconsistent data.',
        gitHubLink: 'https://github.com/colleen-noel/hazy-calculator',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 7,
        name: 'Perfect Lineup',
        description: 'I created a function that returns true if a lineup of players meet a list of requirements.',
        gitHubLink: 'https://github.com/colleen-noel/perfect-lineup',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 8,
        name: 'TV Synopsis',
        description: 'I created an Express/Pug powered site to display data about a TV show.',
        gitHubLink: 'https://github.com/colleen-noel/tv-synopsis',
        apps: '["javascript", "express", "pug", "nodemon"]',
        pictureName: 'pictures/tv-synopsis-1.png, pictures/tv-syopsis-2.png',
      },
      {
        id: 9,
        name: 'Movie API',
        description: 'I created an Express driven API based on given information.',
        gitHubLink: 'https://github.com/colleen-noel/movie-api',
        apps: '["javascript", "express", "body-parser", "nodemon"]',
        pictureName: null,
      },
      {
        id: 10,
        name: 'Disney Villains API',
        description: 'I created a REST API, utilizing a MySQL database, that returns JSON data. I also built an accompanying test suite.',
        gitHubLink: 'https://github.com/colleen-noel/disney-villains-api',
        apps: '["javascipt", "express", "sequelize", "mySQL", "body-parser", "chai", "mocha", "sinon", "sinon-chai", "nodemon"]',
        pictureName: null,
      },
      {
        id: 11,
        name: 'Great Novels API',
        description: 'I created sequelize migrations to create multiple table structures in a SQL built database, and built an express driven API that returns JSON data.',
        gitHubLink: 'https://github.com/colleen-noel/great-novels-api',
        apps: '["javascript", "express", "mySQL", "sequelize", "nodemon"]',
        pictureName: null,
      },
      {
        id: 12,
        name: 'React Calculator',
        description: 'I created a an interactive page that makes calculations based on user input',
        gitHubLink: 'https://github.com/colleen-noel/react-calculator',
        apps: '["javascript", "HTML", "react", "babel", "webpack", "CSS"]',
        pictureName: 'pictures/react-calculator.png',
      },
      {
        id: 13,
        name: 'Great Novels UI',
        description: 'I created a React page with a list of novels and a search box to allow the user to search by title. I also build a test suite to accompany this project. ',
        gitHubLink: 'https://github.com/colleen-noel/great-novels-ui',
        apps: '["javascript", "react", "HTML", "babel", "express", "mySQL", "sequelize", "axios", "enzyme", "chai", "sinon", "mocha", "sinon-chai", "webpack"]',
        pictureName: 'pictures/great-novels-1.png, pictures/great-novels-2.png',
      },
      {
        id: 14,
        name: 'Order Book',
        description: 'I created a function which handles incoming and outgoing cryptocurrency orders, reconciling them correctly.',
        gitHubLink: 'https://github.com/colleen-noel/order-book',
        apps: '["javascript", "mocha", "chai"]',
        pictureName: null,
      },
      {
        id: 15,
        name: 'API Portfolio Project',
        description: 'I built a REST API from the ground up, with a PUG documentation page, that returns JSON data, and a test suite to ensure the functionality of the API.  ',
        gitHubLink: 'https://github.com/colleen-noel/api-portfolio-project',
        apps: '["jacascript", "express", "mySQL", "sequelize", "pug", "bootstrap", "body-parser", "chai", "mocha", "sinon", "sinon-chai"]',
        pictureName: 'pictures/portfolio-API.png',
      },
      {
        id: 16,
        name: 'React Portfolio Site',
        description: 'Well, you are looking at it. A list of my projects completed during my Web Development Camp',
        gitHubLink: 'https://github.com/colleen-noel/portfolio-site',
        apps: '["javascript", "react", "HTML", "babel", "sequelize", "mySQL", "express", "webpack", "bootstrap"]',
        pictureName: null,
      },
    ])
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('projects')
  }
};
