import sequelize from '@config/db.config';

const Accesos = sequelize.define('accesos', {
  /*   idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  } */
});

export default Accesos;
