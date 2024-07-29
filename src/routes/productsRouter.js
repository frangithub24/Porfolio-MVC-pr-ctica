//requerimos express y guardamos la ejecución del método Router.
const express = require('express');
// router con R mayúscula
const router = express.Router();

//Importamos el controlador de preocutos:
const productsController = require("../controllers/productsController.js")
//En vez de app.get, utilizamos router.get. Va "guardando" en router las distintas rutas. 
//Procesa el pedido get con ruta /productos/compra

//router.get("/compra",productsController.compra)

//Procesa el pedido get con ruta/productos/venta

//router.get("/venta", productsController.venta)

//Procesa el pedido get con ruta/productos/numeroProducto
//ruta parametrizada

//router.get('/:num',productsController.detalle) 

module.exports = router;

