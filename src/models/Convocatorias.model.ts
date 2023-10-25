import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Convocatoria = sequelize.define('Convocatoria', {
  idconvocatoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  decripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pdf: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

export default Convocatoria;
