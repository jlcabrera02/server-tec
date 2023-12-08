import { Router } from 'express';
import articulos from '@controllers/articulos.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtener', articulos.obtenerArticulo);
router.get('/obtener/:ruta', articulos.obtenerArticulo);
router.post('/crear', verifyAdmin, articulos.crearArticulo);
router.put('/editar/:idarticulo', verifyAdmin, articulos.actualizarArticulo);
router.delete('/eliminar/:idarticulo', verifyAdmin, articulos.eliminarArticulo);

export default router;
