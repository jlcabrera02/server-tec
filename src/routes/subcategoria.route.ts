import { Router } from 'express';
import subcategoria from '@controllers/subcategorias.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', subcategoria.obtenerSubcategorias);
router.post('/crear', verifyAdmin, subcategoria.crearSubcategoria);
router.put(
  '/editar/:idsubcategoria',
  verifyAdmin,
  subcategoria.actualizarSubcategoria
);
router.delete(
  '/eliminar/:idsubcategoria',
  verifyAdmin,
  subcategoria.eliminarSubcategoria
);

export default router;
