import { Router } from 'express';
import categoria from '@controllers/categorias.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', categoria.obtenerCategorias);
router.post('/crear', verifyAdmin, categoria.crearCategoria);
router.put('/editar/:idcategoria', verifyAdmin, categoria.actualizarCategoria);
router.delete(
  '/eliminar/:idcategoria',
  verifyAdmin,
  categoria.eliminarCategoria
);

export default router;
