'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', 
      [
        {
          name: 'nelson',
          password: '123',
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      
      return queryInterface.bulkDelete('users', null, {});
  }
};