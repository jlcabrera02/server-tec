import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Imagenes = sequelize.define('Imagenes', {
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
