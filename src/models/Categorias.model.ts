import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Categorias = sequelize.define('categorias', {
  idcategoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  show: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  dropcollapse: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment:
      'Es para identificar si sera un enlace o dentro de ella habra mas enlaces que le pertenezcan, en el caso que sea un solo link necesita rellenar el campo ruta.'
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ruta: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Categorias;
