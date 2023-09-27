import { Router } from 'express';
import banners from '@routes/banners.route';
import bannerController from '@controllers/banners.controller';

const router = Router();

router.use('/banners', banners);

router.get('/bannersimagenes/:imagen', bannerController.obtenerImagenesBanners);

export default router;
