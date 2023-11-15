import { Router } from 'express';
import conv from '@controllers/convocatorias.controller';

const router = Router();

router.get('/obtener', conv.obtenerConvocatorias);
router.post('/crear', conv.crearConvocatoria);

router.put(
  '/actualizardatosxidconvocatoria/:idconvocatoria',
  conv.actualizarConvocatoriasDatos
);

router.put(
  '/actualizarimgxidconvocatoria/:idconvocatoria',
  conv.actualizarImagen
);

router.put('/actualizarpdfxidconvocatoria/:idconvocatoria', conv.actualizarPDF);

router.delete(
  '/eliminarxidconvocatoria/:idconvocatoria',
  conv.eliminarConvocatoria
);

export default router;
