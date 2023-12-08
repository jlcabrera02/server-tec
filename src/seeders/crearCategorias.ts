import Categorias from '@models/Categorias.model';
import Subcategorias from '@models/Subcategorias.model';

export const crearCat = async () => {
  await Categorias.bulkCreate([
    {
      idcategoria: 1,
      categoria: 'Conocenos',
      descripcion: 'conocenos'
    },
    {
      idcategoria: 2,
      categoria: 'Oferta-educativa',
      descripcion: 'Oferta-educativa'
    },
    {
      idcategoria: 3,
      categoria: 'Servicios',
      descripcion: 'Servicios'
    },
    {
      idcategoria: 4,
      categoria: 'Estudiantes',
      descripcion: 'Estudiantes'
    },
    {
      idcategoria: 5,
      categoria: 'Docentes',
      descripcion: 'Docentes'
    },
    {
      idcategoria: 6,
      categoria: 'Egresados',
      descripcion: 'Egresados'
    }
  ]);

  await Subcategorias.bulkCreate([
    {
      idcategoria: 1,
      subcategoria: 'Antenecedes historicos',
      descripcion: 'antecedentes',
      ruta: 'antecedentes'
    },
    {
      idcategoria: 1,
      subcategoria: 'Mision',
      descripcion: 'mision',
      ruta: 'mision'
    },
    {
      idcategoria: 1,
      subcategoria: 'Valores',
      descripcion: 'valores',
      ruta: 'valores'
    },
    {
      idcategoria: 2,
      subcategoria: 'Ing sistemas',
      descripcion: 'sistemas',
      ruta: 'sistemas'
    },
    {
      idcategoria: 2,
      subcategoria: 'Ing ambiental',
      descripcion: 'ambiental',
      ruta: 'ambiental'
    },
    {
      idcategoria: 2,
      subcategoria: 'Ing industrial',
      descripcion: 'industrial',
      ruta: 'industrial'
    },
    {
      idcategoria: 4,
      subcategoria: 'Titulos',
      descripcion: 'titulos',
      ruta: 'titulos'
    },
    {
      idcategoria: 4,
      subcategoria: 'Ing ambiental',
      descripcion: 'ambiental',
      ruta: 'ambiental'
    }
  ]);

  process.exit();
};
