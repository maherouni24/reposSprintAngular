const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Commentaire extends Model {
    static associate(models) {
      // define association here
      Commentaire.belongsTo(models.User, {
        foreignKey: "idUser",
        onDelete: "CASCADE",
      });
    }
    static associate(models) {
        // define association here
        Commentaire.belongsTo(models.Blog, {
          foreignKey: "idpub",
          onDelete: "CASCADE",
        });
      }
  }
  Commentaire.init(
    {
      decription: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Commentaire",
    }
  );
  return Commentaire;
};
