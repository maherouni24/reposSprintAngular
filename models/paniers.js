
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paniers extends Model {
    static associate(models) {}
  }

  Paniers.init(
    {},
    {
      sequelize,
      modelName: "Paniers",
    }
  );
  return Paniers;
};
