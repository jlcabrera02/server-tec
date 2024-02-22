import { Router } from 'express';
import users from '@controllers/users.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/usuarios', verifyAdmin, users.obtenerUsuarios);
router.get('/permisos', verifyAdmin, users.obtenerPermisos);
router.get('/roles', verifyAdmin, users.obtenerRoles);
router.get('/roles-permisos', verifyAdmin, users.obtenerPermisos);
router.post('/crear-rol', verifyAdmin, users.crearRol);
router.put('/editar-rol', verifyAdmin, users.editarRol);
router.put('/change-rol', verifyAdmin, users.cambiarRolUsuario);
router.delete('/eliminar-rol/:rol', verifyAdmin, users.eliminarRol);
router.put('/asociar-rol-permiso', verifyAdmin, users.asociarPermisosRoles);

router.post('/login', users.login);
router.post('/crear-usuario', verifyAdmin, users.crearUsuario);

export default router;
