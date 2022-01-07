'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullName: 'Demo',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        fullName: 'Mary Jones',
        email: 'maryjones@email.com',
        username: 'maryjones65',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'John Gray',
        email: 'johngray@email.com',
        username: 'jgray',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Edwin Grande',
        email: 'edwingrande@email.com',
        username: 'edwingrande',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Rajesh Nair',
        email: 'rajeshnair@email.com',
        username: 'rnair22',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Ruth Vega',
        email: 'ruthvega@email.com',
        username: 'ruthvega254',
        hashedPassword: bcrypt.hashSync('password123!')
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition']}
    });
  }
};
