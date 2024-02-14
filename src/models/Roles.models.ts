import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Roles = sequelize.define('roles', {
  rol: {
    type: DataTypes.STRING,
    primaryKey: true
  }
});

export const RolesAndPermisos = sequelize.define('roles_permisos', {});

export default Roles;
