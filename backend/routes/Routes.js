const productoController = require('../controllers/productoController');
const entregaController = require('../controllers/entregaController');

const express = require('express');

const api= express.Router();

module.exports=api;

//rutas Inventario
api.post('/producto',productoController.createProducto);
api.get('/productos',productoController.getProductos);
api.put("/producto/update/:id",productoController.updateProducto);
api.delete('/producto/delete/:id',productoController.deleteProducto);
api.get("/producto/show/:id",productoController.getProducto);

//rutas Entrega
api.post('/entrega',entregaController.createEntrega);
api.get('/entregas',entregaController.getEntregas);
api.put("/entrega/update/:id",entregaController.updateEntrega);
api.delete('/entrega/delete/:id',entregaController.deleteEntrega);
api.get("/entrega/show/:id",entregaController.getEntrega);