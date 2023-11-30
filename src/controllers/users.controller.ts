import { crearUsuario as cu, login as lg } from '@services/Users.services';
import { sing } from '@middlewares/auth';

const controller = {
  login: null, //
  crearUsuario: null //
};

controller.crearUsuario = async (req, res) => {
  try {
    const response = await cu(req.body);

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al crear usuario'
    });
  }
};

controller.login = async (req, res) => {
  try {
    const response = await lg(req.body);
    const token = await sing(response.dataValues);

    res
      .status(200)
      .json({ success: true, response: { token, ...response.dataValues } });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error contraseña o usuario incorrectos'
    });
  }
};

export default controller;
