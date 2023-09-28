import { Router } from 'express';
import blogs from '@controllers/blogs.controller';

const router = Router();

router.get('/obtenerxidblog/:idblog', blogs.obtenerBlog);
router.get('/obtener', blogs.obtenerBlogs);

router.post('/crear', blogs.crearBlog);
router.post('/nuevaimagenxidblog/:idblog', blogs.nuevaImagen);

router.put('/cambiarestatusxidblog/:idblog', blogs.modificarEstatus);
router.put('/editarimagenxidimagen/:idimagen', blogs.editarImagenes);
router.put(
  '/actualizarimagenprincipalxidblog/:idblog',
  blogs.editarImagenPrincipal
);
router.put('/actualizarxidblog/:idblog', blogs.editarBlogTexto);

router.delete('/eliminarimagenxidimagen/:idimagen', blogs.eliminarImagen);
router.delete('/eliminarxidblog/:idblog', blogs.eliminarBlog);

export default router;
