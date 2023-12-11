import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Subcategorias = sequelize.define('subcategorias', {
  idsubcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idcategoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  subcategoria: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Subcategorias;
