'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('users', { 
      
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
      },

      name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      
      password: {
          type: Sequelize.STRING,
          allowNull: false
      },
      
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('users');

  }
};