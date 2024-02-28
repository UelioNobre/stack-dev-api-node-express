'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@doe.com',
        password: '123456'
      }, {
        name: 'Mila Evans',
        email: 'mila@evans.com',
        password: '123456'
      }, {
        name: 'Clark Kent',
        email: 'clark@kent.com',
        password: '123456'
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
