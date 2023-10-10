import { Router } from 'express';
import banners from '@routes/banners.route';
import blogs from '@routes/blogs.route';
import etiquetas from '@routes/etiquetas.route';
import getImage from '@utils/obtenerImagenes';

const router = Router();

router.use('/banners', banners);
router.use('/blogs', blogs);
router.use('/etiquetas', etiquetas);

//Get Images
router.get('/bannersimagenes/:imagen', getImage);
router.get('/blogsimagenes/:imagen', getImage);

export default router;
