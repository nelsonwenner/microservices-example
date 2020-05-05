'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', 
      [
        {
          name: 'nelson',
          email: 'nelsonwenner@gmail.com',
          password: 'test@123',
          created_at: new Date(),
          updated_at: new Date(),
        },

      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
      
    return queryInterface.bulkDelete('users', null, {});
  }
};