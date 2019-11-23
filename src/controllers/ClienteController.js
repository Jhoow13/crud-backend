const Cliente = require("../models/Cliente");

module.exports = {
  async create(req, res) {
    const { name, number, email, value } = req.body;

    const cliente = {
      name,
      number,
      email,
      value
    };

    const clienteSaved = await Cliente.create(cliente);

    return res.json(clienteSaved);
  },

  async read(req, res) {
    const clientes = await Cliente.find();

    return res.json(clientes);
  },

  async readOne(req, res) {
    const cliente_id = req.params.id;

    const clientes = await Cliente.findById(cliente_id);

    return res.json(clientes);
  },

  async update(req, res) {
    const cliente_id = req.params.id;
    const { name, number, email, value } = req.body;

    const cliente = {
      name,
      number,
      email,
      value
    };

    const cliente_response = await Cliente.updateOne(
      { _id: cliente_id },
      cliente
    );

    return res.json(cliente_response);
  },

  async delete(req, res) {
    const cliente_id = req.params.id;

    const a = await Cliente.deleteOne({ _id: cliente_id });

    return res.json(a);
  }
};
