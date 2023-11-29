import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Banners = sequelize.define('accesos', {
  idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Banners;
