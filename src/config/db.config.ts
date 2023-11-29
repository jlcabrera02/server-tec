import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const sequelize = new Sequelize(
  process.env.NAME_DB,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  {
    host: process.env.HOST_DB,
    port: Number(process.env.PORT_DB),
    dialect: 'mysql'
  }
);

sequelize
  .authenticate()
  .then(() => console.log('conectado correctamente a la base de datos'))
  .catch((err) => console.log(err));

export default sequelize;
