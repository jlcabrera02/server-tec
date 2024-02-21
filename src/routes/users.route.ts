import { Router } from 'express';
import users from '@controllers/users.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/permisos', users.obtenerPermisos);
router.get('/roles', users.obtenerRoles);
router.get('/roles-permisos', users.obtenerPermisos);
router.post('/crear-rol', users.crearRol);
router.put('/editar-rol', users.editarRol);
router.delete('/eliminar-rol/:rol', users.eliminarRol);
router.put('/asociar-rol-permiso', users.asociarPermisosRoles);

router.post('/login', users.login);
router.post('/crear-usuario', verifyAdmin, users.crearUsuario);

export default router;
