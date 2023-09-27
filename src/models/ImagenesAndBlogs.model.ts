import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Imagenes = sequelize.define('Imagenes', {
  idimagen: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  }
});

export default Imagenes;
