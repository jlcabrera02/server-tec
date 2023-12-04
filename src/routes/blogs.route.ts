import { Router } from 'express';
import blogs from '@controllers/blogs.controller';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.get('/obtenerxidblog/:idblog', blogs.obtenerBlog);
router.get('/obtener', blogs.obtenerBlogs);
router.get('/filtrar', blogs.obtenerBlogFiltroEtiqueta);

router.post('/crear', verifyAdmin, blogs.crearBlog);
router.post('/nuevaimagen', verifyAdmin, blogs.nuevaImagen);

router.put(
  '/cambiarestatusxidblog/:idblog',
  verifyAdmin,
  blogs.modificarEstatus
);
router.put(
  '/editarimagenxidimagen/:idimagen',
  verifyAdmin,
  blogs.editarImagenes
);
router.put(
  '/actualizarimagenprincipalxidblog/:idblog',
  verifyAdmin,
  blogs.editarImagenPrincipal
);
router.put('/actualizarxidblog/:idblog', verifyAdmin, blogs.editarBlogTexto);
router.put(
  '/actualizaretiquetasxidblog/:idblog',
  verifyAdmin,
  blogs.editarEtiquetas
);

router.delete(
  '/eliminarimagenxidimagen/:idimagen',
  verifyAdmin,
  blogs.eliminarImagen
);
router.delete('/eliminarxidblog/:idblog', verifyAdmin, blogs.eliminarBlog);

export default router;
