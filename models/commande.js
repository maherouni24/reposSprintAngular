"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Commande.belongsTo(models.User, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
      });
    }
  }
  Commande.init(
    {
      cours: DataTypes.JSON,
      total: DataTypes.INTEGER,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Commande",
    }
  );
  return Commande;
};
