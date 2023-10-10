import { crearEtiqueta } from '@services/Etiquetas.services';

const controller = {
  crearEtiqueta: null //
};

controller.crearEtiqueta = async (req, res) => {
  try {
    const { etiqueta } = req.body;

    const response = await crearEtiqueta({ etiqueta });

    res.status(200).json({ success: true, response });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      success: false,
      response: err,
      msg: 'Error al ingresar una nueva etiqueta'
    });
  }
};

export default controller;
