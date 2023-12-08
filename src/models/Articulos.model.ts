import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

//Los articulos son las diferentes secciones que se manejaran en el sitio web.

const Articulos = sequelize.define('articulos', {
  idarticulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  match_route: {
    type: DataTypes.STRING,
    allowNull: true,
    comment:
      'Llevara una ruta que coincida con una subcategoria o categoria o cualquier elemento necesario'
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Articulos;
