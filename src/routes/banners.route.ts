import { Router } from 'express';
import banners from '@controllers/banners.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', banners.obtenerBanners);
router.post('/crear', verifyAdmin, banners.crearBanner);
router.put(
  '/actualizarxidbanner/:idbanner',
  verifyAdmin,
  banners.actualizarBanner
);
router.put(
  '/actualizarvigenciaxidbanner/:idbanner',
  verifyAdmin,
  banners.vigenciaBanner
);
router.delete(
  '/eliminarxidbanner/:idbanner',
  verifyAdmin,
  banners.eliminarBanner
);

export default router;
