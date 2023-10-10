import { Router } from 'express';
import etiquetas from '@controllers/etiquetas.controller';

const router = Router();

router.post('/insertar', etiquetas.crearEtiqueta);
export default router;
