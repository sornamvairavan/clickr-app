'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    photoUrl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    caption: {
      type: DataTypes.TEXT,
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.User, {foreignKey: 'userId'})
    Photo.hasMany(models.Comment, {foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true })
    Photo.hasMany(models.Like, {foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true })
  };
  return Photo;
};