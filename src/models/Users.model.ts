import sequelize from '@config/db.config';
import useBcrypt from 'sequelize-bcrypt';
import { DataTypes } from 'sequelize';

const Users = sequelize.define('usuarios', {
  usuario: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apepat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apemat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

useBcrypt(Users, {
  field: 'password',
  rounds: 12,
  compare: 'authenticate'
});

export default Users;
