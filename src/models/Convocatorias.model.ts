import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Convocatoria = sequelize.define('convocatoria', {
  idconvocatoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
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
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Convocatoria;
