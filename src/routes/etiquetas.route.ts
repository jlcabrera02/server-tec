import { Router } from 'express';
import etiquetas from '@controllers/etiquetas.controller';

const router = Router();

router.get('/obtener', etiquetas.obtenerEtiquetas);
router.post('/insertar', etiquetas.crearEtiqueta);
router.put('/actualizarxidetiqueta/:idetiqueta', etiquetas.actualizarEtiqueta);
router.delete('/eliminarxidetiqueta/:idetiqueta', etiquetas.eliminarEtiqueta);
export default router;
