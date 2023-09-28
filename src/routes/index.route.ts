import { Router } from 'express';
import banners from '@routes/banners.route';
import blogs from '@routes/blogs.route';
import bannerController from '@controllers/banners.controller';

const router = Router();

router.use('/banners', banners);
router.use('/blogs', blogs);

router.get('/bannersimagenes/:imagen', bannerController.obtenerImagenesBanners);
router.get('/blogsimagenes/:imagen', bannerController.obtenerImagenesBanners);

export default router;
