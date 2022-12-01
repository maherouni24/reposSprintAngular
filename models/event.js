const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Events.belongsTo(models.User, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
      });
      Events.belongsToMany(models.User, { through: "InscritEvent" });

    }
  }
  Events.init(
    {
      nomEvent: DataTypes.STRING,
      prix: DataTypes.INTEGER,
      type:DataTypes.ENUM({
        values: ["game", "event"],
      }),
      date_debut: DataTypes.DATE,
      date_fin: DataTypes.DATE,
      ownerId: DataTypes.INTEGER,
      
    },
    {
      sequelize,
      modelName: "Events",
    }
  );
  return Events;
};
