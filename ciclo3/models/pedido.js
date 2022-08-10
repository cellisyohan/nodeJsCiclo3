'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente);//pedido pertence a "1" cliente
      Pedido.belongsToMany(models.Servico, {
        through:'ItemPerdido'
      });//pedido pertence a muito serviços
        
    }
  }
  Pedido.init({
    dataPedido: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};