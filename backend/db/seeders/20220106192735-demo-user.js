'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        fullName: 'Demo',
        email: 'demo@user.io',
        username: 'demo-user',
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
        username: 'rajnair',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Ruth Vega',
        email: 'ruthvega@email.com',
        username: 'ruthvega24',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Rose Beelzebul',
        email: 'rosebeelzebul@email.com',
        username: 'rosebeelzebul',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Hotaru Thomas',
        email: 'hotaruthomas@email.com',
        username: 'hotaru946',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Pedro Perez',
        email: 'pedroperez@email.com',
        username: 'pedroperez',
        hashedPassword: bcrypt.hashSync('password123!')
      },
      {
        fullName: 'Warren Williams',
        email: 'warrenwilliams@email.com',
        username: 'warrenwilliams',
        hashedPassword: bcrypt.hashSync('password123!')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
