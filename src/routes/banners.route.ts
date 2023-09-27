import { Router } from 'express';
import banners from '@controllers/banners.controller';

const router = Router();

router.get('/obtener', banners.obtenerBanners);
router.post('/crear', banners.crearBanner);
router.put('/actualizarxidbanner/:idbanner', banners.actualizarBanner);
router.put('/actualizarvigenciaxidbanner/:idbanner', banners.vigenciaBanner);
router.delete('/eliminarxidbanner/:idbanner', banners.eliminarBanner);

export default router;
