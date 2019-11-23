const express = require("express");
const routes = express.Router();
const clienteMiddleware = require("./middlewares/cliente");

const ClienteController = require("./controllers/ClienteController");

routes.post("/cliente", ClienteController.create);
routes.get("/cliente", ClienteController.read);

routes.get(
  "/cliente/:id",
  clienteMiddleware.handleClienteId,
  ClienteController.readOne
);
routes.put(
  "/cliente/:id",
  clienteMiddleware.handleClienteId,
  ClienteController.update
);
routes.delete(
  "/cliente/:id",
  clienteMiddleware.handleClienteId,
  ClienteController.delete
);

module.exports = routes;
