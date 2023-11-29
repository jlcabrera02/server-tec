import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Banners = sequelize.define('usuarios', {
  usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ape_pat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ape_mat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Banners;
