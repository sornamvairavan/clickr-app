'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        photoId: 1,
        content: "Nice shot!"
      },
      {
        userId: 5,
        photoId: 2,
        content: "Wow!"
      },
      {
        userId: 4,
        photoId: 3,
        content: "Such a beautiful shot!"
      },
      {
        userId: 3,
        photoId: 4,
        content: "I love this place!"
      },
      {
        userId: 6,
        photoId: 5,
        content: "I totally agree!"
      },
      {
        userId: 2,
        photoId: 7,
        content: "Amazing!"
      },
      {
        userId: 5,
        photoId: 10,
        content: "Beautiful!"
      },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
