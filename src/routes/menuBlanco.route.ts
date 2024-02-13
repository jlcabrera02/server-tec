import { Router } from 'express';
import controlador from '@controllers/Menu.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', controlador.obtener);
router.post('/crear', verifyAdmin, controlador.crear);
router.put('/editar/:idMenu', verifyAdmin, controlador.editar);
router.delete('/eliminar/:idMenu', verifyAdmin, controlador.eliminar);

export default router;
