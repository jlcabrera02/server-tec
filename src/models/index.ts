import sequelize from '@config/db.config';
import Banners from './Banners.model';
import Blogs from './Blogs.model';
import Imagenes from './Imagenes.model';
import Etiquetas from './Etiquetas.model';
import EtiquetasBlogs from './Etiquetas_Blogs.model';

Imagenes.belongsTo(Blogs, { foreignKey: 'idblog', onDelete: 'cascade' });
Blogs.hasMany(Imagenes, { foreignKey: 'idblog' });

Blogs.belongsToMany(Etiquetas, { through: EtiquetasBlogs });
Etiquetas.belongsToMany(Blogs, { through: EtiquetasBlogs });

export default {
  Banners,
  Blogs,
  Etiquetas,
  Imagenes,
  EtiquetasBlogs
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err));
};
