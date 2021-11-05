module.exports = (database, DataTypes) => {
  return database.define(
    'Transaction',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      payment_method: {
        type: DataTypes.ENUM,
        values: [
          'credit_card',
          'debit_card'
        ]
      },
      card_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      card_holder_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      card_expiration_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      card_verification_value: {
        type: DataTypes.STRING,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      underscored: true,
      tableName: 'Transactions',
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )
}
