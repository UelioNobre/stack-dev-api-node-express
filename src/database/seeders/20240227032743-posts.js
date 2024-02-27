'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [
      {
        title: 'First post',
        text: 'First text content of the post'
      },
      {
        title: 'Second post',
        text: 'Second text content of the post'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('posts', null, {});

  }
};
