import sequelize from '@config/db.config';
import Banners from './Banners.model';
import Blogs from './Blogs.model';
import Imagenes from './Imagenes.model';

Imagenes.belongsTo(Blogs, { foreignKey: 'idblog', onDelete: 'cascade' });
Blogs.hasMany(Imagenes, { foreignKey: 'idblog' });

export default {
  Banners,
  Blogs,
  Imagenes
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err));
};
