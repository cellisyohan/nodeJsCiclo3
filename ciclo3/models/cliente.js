'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Pedido);//associação cliente com pedido de 1 para muitos
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    clienteDesde: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};