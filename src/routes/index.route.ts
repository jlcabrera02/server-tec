import { Router } from 'express';
import banners from '@routes/banners.route';
import blogs from '@routes/blogs.route';
import etiquetas from '@routes/etiquetas.route';
import convocatorias from '@routes/convocatoria.route';

import getImage, { obtenerArchivos } from '@utils/obtenerImagenes';

const router = Router();

router.use('/banners', banners);
router.use('/blogs', blogs);
router.use('/etiquetas', etiquetas);
router.use('/convocatorias', convocatorias);

//Get Images
router.get('/bannersimagenes/:imagen', getImage);
router.get('/blogsimagenes/:imagen', getImage);
router.get('/convocatoria/imagen/:imagen', getImage);

//Get archivos
router.get('/convocatoria/archivos/:archivo', obtenerArchivos);

export default router;
