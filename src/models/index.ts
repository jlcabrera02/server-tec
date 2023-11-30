import sequelize from '@config/db.config';
import Banners from './Banners.model';
import Blogs from './Blogs.model';
import Imagenes from './Imagenes.model';
import Etiquetas from './Etiquetas.model';
import EtiquetasBlogs from './Etiquetas_Blogs.model';
import Convocatorias from './Convocatorias.model';
import Users from './Users.model';
import Permisos from './Permisos.model';
import Accesos from './Accesos.models';

Blogs.belongsToMany(Etiquetas, { through: EtiquetasBlogs });
Etiquetas.belongsToMany(Blogs, { through: EtiquetasBlogs });

Users.belongsToMany(Permisos, { through: Accesos });
Permisos.belongsToMany(Users, { through: Accesos });

export default {
  Banners,
  Blogs,
  Etiquetas,
  Imagenes,
  EtiquetasBlogs,
  Convocatorias,
  Users,
  Accesos,
  Permisos
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err));
};
