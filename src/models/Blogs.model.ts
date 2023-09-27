import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Blogs = sequelize.define('Blogs', {
  idblog: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  autorizado: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

export default Blogs;
