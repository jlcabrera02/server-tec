import { Router } from 'express';
import banners from '@routes/banners.route';
import blogs from '@routes/blogs.route';
import etiquetas from '@routes/etiquetas.route';
import convocatorias from '@routes/convocatoria.route';
import categorias from '@routes/categoria.route';
import subcategorias from '@routes/subcategoria.route';
import articulos from '@routes/articulos.route';
import user from '@routes/users.route';
import menuBlanco from '@routes/menuBlanco.route';

import getImage, { obtenerArchivos } from '@utils/obtenerImagenes';

const router = Router();

router.use('/banners', banners);
router.use('/blogs', blogs);
router.use('/etiquetas', etiquetas);
router.use('/convocatorias', convocatorias);
router.use('/auth', user);
router.use('/categorias', categorias);
router.use('/subcategorias', subcategorias);
router.use('/articulos', articulos);
router.use('/menu-blanco', menuBlanco);

//Get Images
router.get('/bannersimagenes/:imagen', getImage);
router.get('/blogsimagenes/:imagen', getImage);
router.get('/convocatoria/imagen/:imagen', getImage);

//Get archivos
router.get('/convocatoria/archivos/:archivo', obtenerArchivos);

export default router;
