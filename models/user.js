const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Reclamation, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
        hooks: true,
      });
      User.belongsToMany(models.Cours, { through: "InscritCours" });
      User.belongsToMany(models.Events, { through: "InscritEvent" });

      

      User.belongsToMany(models.Blog, { through: "Like" });
      User.belongsToMany(models.Blog, { through: "Like" });
      User.belongsToMany(models.Blog, { through: "Favories" });


      User.belongsToMany(models.Cours, { through: "Paniers" });


      User.hasMany(models.Events, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
        hooks: true,
      });

      // define association here
      User.hasMany(models.Blog, {
        foreignKey: "idUser",
        onDelete: "CASCADE",
      });

      User.hasMany(models.Commentaire, {
        foreignKey: "idUser",
        onDelete: "CASCADE",
        hooks: true,
      });
      User.hasMany(models.Commande, {
        foreignKey: "ownerId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Username already in use!",
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      role: DataTypes.ENUM({
        values: ["student", "teacher", "coach", "admin"],
      }),
      password: DataTypes.STRING,
      sold : DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
