import { Router } from 'express';
import conv from '@controllers/convocatorias.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', conv.obtenerConvocatorias);
router.get('/obtener/convocatoria/:url', conv.obtenerConvocatoria);
router.post('/crear', verifyAdmin, conv.crearConvocatoria);

router.put(
  '/actualizardatosxidconvocatoria/:idconvocatoria',
  verifyAdmin,
  conv.actualizarConvocatoriasDatos
);

router.put(
  '/actualizarimgxidconvocatoria/:idconvocatoria',
  verifyAdmin,
  conv.actualizarImagen
);

router.put(
  '/actualizarpdfxidconvocatoria/:idconvocatoria',
  verifyAdmin,
  conv.actualizarPDF
);

router.delete(
  '/eliminarxidconvocatoria/:idconvocatoria',
  verifyAdmin,
  conv.eliminarConvocatoria
);

export default router;
