import { Router } from 'express';
import controlador from '@controllers/WhiteMenu.controller';
import submenu from '@controllers/WhiteSubMenu.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', controlador.obtener);
router.post('/crear', verifyAdmin, controlador.crear);
router.put('/editar/:idMenu', verifyAdmin, controlador.editar);
router.delete('/eliminar/:idMenu', verifyAdmin, controlador.eliminar);

router.get('/submenu/obtener', verifyAdmin, submenu.obtener);
router.post('/submenu/crear', verifyAdmin, submenu.crear);
router.put('/submenu/editar/:idSubMenu', verifyAdmin, submenu.editar);
router.delete('/submenu/eliminar/:idSubMenu', verifyAdmin, submenu.eliminar);

export default router;
