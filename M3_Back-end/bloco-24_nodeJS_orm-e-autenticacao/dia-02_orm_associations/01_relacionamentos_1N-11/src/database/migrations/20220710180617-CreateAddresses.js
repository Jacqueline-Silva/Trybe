'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          model: 'Employees',// Informa a tabela da referência da associação
          key: 'id', // Informa a coluna da referência que é a chave correspondente
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};