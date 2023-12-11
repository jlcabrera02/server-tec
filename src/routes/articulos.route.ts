import { Router } from 'express';
import articulos from '@controllers/articulos.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', articulos.obtenerArticulos);
router.get('/obtener/:ruta', articulos.obtenerArticulo);
router.post('/crear', verifyAdmin, articulos.crearArticulo);
router.put('/editar/:idarticulo', verifyAdmin, articulos.actualizarArticulo);

router.put(
  '/actualizaretiquetasxidarticulo/:idarticulo',
  verifyAdmin,
  articulos.editarEtiquetas
);

router.delete('/eliminar/:idarticulo', verifyAdmin, articulos.eliminarArticulo);

export default router;
