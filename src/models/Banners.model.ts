import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Banners = sequelize.define('Banners', {
  idbanner: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mostrar: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Banners;
