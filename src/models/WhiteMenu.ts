import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const WhiteMenu = sequelize.define(
  'white_menu',
  {
    idmenu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

export default WhiteMenu;
