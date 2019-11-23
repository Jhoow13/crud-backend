const mongoose = require("mongoose");
const Cliente = require("../models/Cliente");

module.exports = {
  async handleClienteId(req, res, next) {
    const cliente_id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(cliente_id)) {
      return res.status(401).json({ errorMessage: "ID do cliente inválido" });
    }

    const checkClienteId = await Cliente.findById(cliente_id);

    if (!checkClienteId) {
      return res
        .status(401)
        .json({ errorMessage: "ID do cliente não existente" });
    }

    next();
  }
};
