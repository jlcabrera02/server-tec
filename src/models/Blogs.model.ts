import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Blogs = sequelize.define('blogs', {
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  estatus: {
    type: DataTypes.ENUM('aceptado', 'rechazado', 'pendiente'),
    allowNull: false,
    defaultValue: 'pendiente'
  },
  imagen: { type: DataTypes.STRING, allowNull: false },
  usuario: { type: DataTypes.STRING, allowNull: true },
  fechavigente: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

export default Blogs;
