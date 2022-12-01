"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cours extends Model {
    static associate(models) {
      // define association here
      Cours.belongsTo(models.User, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
      });
      Cours.belongsToMany(models.User, { through: "InscritCours" });
      Cours.belongsToMany(models.User, { through: "Paniers" });

    }
  }
  Cours.init(
    {
      nomMatier: DataTypes.STRING,
      prix: DataTypes.INTEGER,
      type: DataTypes.ENUM({
        values: ["Formation", "Cours"],
      }),
      date_debut: DataTypes.DATE,
      date_fin: DataTypes.DATE,
      ownerId: DataTypes.INTEGER,
      statut: DataTypes.BOOLEAN

    },
    {
      sequelize,
      modelName: "Cours",
    }
  );
  return Cours;
};
