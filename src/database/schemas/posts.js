'use strict';
const { Model } = require('sequelize');

/**
 * @param {import('sequelize').Sequelize} sequelize - Instância do Sequelize
 * @param {import('sequelize').DataTypes} DataTypes - Tipos de dados do Sequelize
 */
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    static associate(models) {
      // define association here
    }
  }

  posts.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'posts',
    timestamps: true,
    underscored: true,
  });
  return posts;
};