module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      payment_method: {
        type: Sequelize.ENUM,
        values: [
          'credit_card',
          'debit_card'
        ]
      },
      card_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      card_holder_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      card_expiration_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      card_verification_value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Transactions')
  }
}
