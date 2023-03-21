module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define("friends", {
      name: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      }
    });
  
    return Friend;
  };