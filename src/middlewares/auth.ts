import Jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const verifyAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization ? authorization.replace('Bearer ', '') : null;

    if (!token) {
      return res.status(403).json({ ok: false, msg: 'No token' });
    }

    const userAuth = await Jwt.verify(token, process.env.PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24
    });

    if (userAuth) {
      next();
    } else {
      res.status(403).json({ ok: false, msg: 'No autorizado' });
    }
  } catch (err) {
    res.status(403).json({ ok: false, msg: 'No autorizado' });
  }
};
