'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        photoId: 1,
        content: "Love the colors!"
      },
      {
        userId: 5,
        photoId: 2,
        content: "Such beautiful scenes. I wonder what the view is like from the top"
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
        photoId: 3,
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
        content: "Wow!"
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
