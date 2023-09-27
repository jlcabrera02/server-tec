import { Router } from 'express';
import banners from '@routes/banners.route';

const router = Router();

router.use('/banners', banners);

export default router;
