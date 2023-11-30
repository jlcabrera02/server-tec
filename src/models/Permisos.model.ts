import sequelize from '@config/db.config';
import { DataTypes } from 'sequelize';

const Permisos = sequelize.define('permisos', {
  idpermiso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  permiso: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export const crearPermisos = async () => {
  Permisos.bulkCreate([
    {
      idpermiso: 1,
      permiso: 'Super usuario',
      descripcion: 'Es un usuario con el nivel mas alto'
    },
    {
      idpermiso: 2,
      permiso: 'difucion',
      descripcion: 'Para el departamento de difucion'
    },
    {
      idpermiso: 3,
      permiso: 'sistemas',
      descripcion: 'Para administradores de la carrera de sistemas'
    },
    {
      idpermiso: 4,
      permiso: 'ambiental',
      descripcion: 'Para administradores de la carrera de ambiental'
    },
    {
      idpermiso: 5,
      permiso: 'industrial',
      descripcion: 'Para administradores de la carrera de industrial'
    },
    {
      idpermiso: 6,
      permiso: 'administracion',
      descripcion: 'Para administradores de la carrera de administración'
    },
    {
      idpermiso: 7,
      permiso: 'civil',
      descripcion: 'Para administradores de la carrera de civil'
    },
    {
      idpermiso: 8,
      permiso: 'bioquimica',
      descripcion: 'Para administradores de la carrera de bioquímica'
    },
    {
      idpermiso: 9,
      permiso: 'electromecanica',
      descripcion: 'Para administradores de la carrera de electromecánica'
    },
    {
      idpermiso: 10,
      permiso: 'Gestor de contenido',
      descripcion:
        'Es un usuario que podra tener acceso a los banners, contenido, de noticias etc.'
    }
  ]);
};

//Usar solamente para llenar el campo de permisos
/* (async () => {
  await crearPermisos();
})(); */

export default Permisos;
