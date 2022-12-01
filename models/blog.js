const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class blog extends Model {
    static associate(models) {
      // define association here
      blog.belongsTo(models.User, {
        foreignKey: "idUser",
        onDelete: "CASCADE",
      });

      blog.belongsToMany(models.User, { through: "Like" });
      blog.belongsToMany(models.User, { through: "Favories" });

    }
  }

  blog.init(
    {
      Titre: DataTypes.STRING,
      decription: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return blog;
};
