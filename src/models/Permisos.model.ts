import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Permisos = sequelize.define('permisos', {
  idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permiso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Permisos;
