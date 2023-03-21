module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false
        },
        completeName: {
            type: Sequelize.STRING,
          allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            isEmail: true,
            allowNull: false
        },
        userName: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
  
    return User;
  };