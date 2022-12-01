const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favories extends Model {
    static associate(models) {}
  }

  Favories.init(
    {},
    {
      sequelize,
      modelName: "Favories",
    }
  );
  return Favories;
};
