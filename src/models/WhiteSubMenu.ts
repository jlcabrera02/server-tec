import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const WhiteSubMenu = sequelize.define(
  'white_submenu',
  {
    idsubmenu: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idmenu: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true
  }
);

export default WhiteSubMenu;
