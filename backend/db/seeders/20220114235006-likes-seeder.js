'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      {
        userId: 2,
        photoId: 1
      },
      {
        userId: 1,
        photoId: 3
      },
      {
        userId: 3,
        photoId: 2
      },
      {
        userId: 4,
        photoId: 1
      },
      {
        userId: 5,
        photoId: 6
      },
      {
        userId: 6,
        photoId: 7
      },
      {
        userId: 7,
        photoId: 9
      },
      {
        userId: 8,
        photoId: 10
      },
      {
        userId: 9,
        photoId: 12
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
