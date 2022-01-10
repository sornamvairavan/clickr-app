'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users'}
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Photos'}
    }
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.User, {foreignKey: 'userId'});
    Like.belongsTo(models.Photo, {foreignKey: 'photoId'});
  };
  return Like;
};