import { Router } from 'express';
import etiquetas from '@controllers/etiquetas.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', etiquetas.obtenerEtiquetas);
router.post('/insertar', verifyAdmin, etiquetas.crearEtiqueta);
router.put(
  '/actualizarxidetiqueta/:idetiqueta',
  verifyAdmin,
  etiquetas.actualizarEtiqueta
);
router.delete(
  '/eliminarxidetiqueta/:idetiqueta',
  verifyAdmin,
  etiquetas.eliminarEtiqueta
);
export default router;
