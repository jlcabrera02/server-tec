import sequelize from '@config/db.config';
import Banners from './Banners.model';
import Blogs from './Blogs.model';
import Imagenes from './Imagenes.model';
import Etiquetas from './Etiquetas.model';
import EtiquetasBlogs from './Etiquetas_Blogs.model';
import Convocatorias from './Convocatorias.model';
import Users from './Users.model';
import Permisos from './Permisos.model';
// import Accesos from './Roles.models';
import Roles, { RolesAndPermisos } from './Roles.models';
import Categorias from './Categorias.model';
import Subcategorias from './Subcategorias.model';
import Articulos from './Articulos.model';
import EtiquetasArticulos from './Etiquetas_Articulos.model';
import WhiteMenu from './WhiteMenu';
import WhiteSubMenu from './WhiteSubMenu';

Blogs.belongsToMany(Etiquetas, { through: EtiquetasBlogs });
Etiquetas.belongsToMany(Blogs, { through: EtiquetasBlogs });
Articulos.belongsToMany(Etiquetas, { through: EtiquetasArticulos });
Etiquetas.belongsToMany(Articulos, { through: EtiquetasArticulos });

Blogs.hasMany(EtiquetasBlogs);
EtiquetasBlogs.belongsTo(Blogs);
Etiquetas.hasMany(EtiquetasBlogs);
EtiquetasBlogs.belongsTo(Etiquetas);

Articulos.hasMany(EtiquetasArticulos);
EtiquetasArticulos.belongsTo(Articulos);
Etiquetas.hasMany(EtiquetasArticulos);
EtiquetasArticulos.belongsTo(Etiquetas);

Categorias.hasMany(Subcategorias, { foreignKey: 'idcategoria' });

Roles.belongsToMany(Permisos, { through: RolesAndPermisos });
Permisos.belongsToMany(Roles, { through: RolesAndPermisos });

WhiteSubMenu.belongsTo(WhiteMenu, { foreignKey: 'idmenu' });
WhiteMenu.hasMany(WhiteSubMenu, { foreignKey: 'idmenu' });

Users.belongsTo(Roles, { foreignKey: 'rol' });

export default {
  Banners,
  Blogs,
  Etiquetas,
  Imagenes,
  EtiquetasBlogs,
  Convocatorias,
  Users,
  // Accesos,
  Permisos,
  Categorias,
  Subcategorias,
  Articulos,
  EtiquetasArticulos,
  WhiteMenu,
  Roles,
  RolesAndPermisos,
  WhiteSubMenu
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err))
    .finally(() => process.exit());
};
