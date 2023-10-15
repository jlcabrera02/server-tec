import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Imagenes = sequelize.define('imagenes', {
  idimagen: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Imagenes;
