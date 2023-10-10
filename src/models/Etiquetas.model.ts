import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Etiquetas = sequelize.define('Etiquetas', {
  idetiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  etiqueta: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Etiquetas;
