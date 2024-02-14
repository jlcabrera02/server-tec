import models from '@models/index';
const { Users, Permisos }: any = models;

type cuerpoLogin = {
  usuario: string;
  password: boolean;
};

type cuerpo = {
  nombres: string;
  apepat: string;
  apemat: string;
  rol: string;
} & cuerpoLogin;

export const login = async (body: cuerpoLogin) => {
  try {
    const filters = {
      usuario: body.usuario
    };

    const login = await Users.findOne({ where: filters });

    const authenticate = await login.authenticate(body.password);
    if (!authenticate) throw { msg: 'Error contraseña incorrecta' };

    delete login.dataValues.password;

    return login;
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export const crearUsuario = async (cuerpo: cuerpo) => {
  try {
    const { nombres, apepat, apemat, password, usuario, rol } = cuerpo;
    const crear = await Users.create({
      nombres,
      apemat,
      usuario,
      apepat,
      rol,
      password
    });
    return crear;
  } catch (err) {
    throw err;
  }
};
