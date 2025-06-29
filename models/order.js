module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Order', {
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  });
};
