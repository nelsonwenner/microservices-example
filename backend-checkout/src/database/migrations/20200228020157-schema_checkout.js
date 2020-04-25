'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('checkouts', { 
      
        checkout_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true 
        },
        
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'user_id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        
        product_id: {
          type: Sequelize.STRING,
          allowNull: false
        },
        
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      });
  },

  down: (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('checkouts');

  }
};