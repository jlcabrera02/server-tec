import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const EtiquetasBlogs = sequelize.define('etiquetas_blogs', {
  BlogIdblog: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  EtiquetaIdetiqueta: {
    type: DataTypes.INTEGER,
    primaryKey: true
  }
});

export default EtiquetasBlogs;
