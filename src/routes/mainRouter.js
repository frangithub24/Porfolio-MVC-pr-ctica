//requerimos express y guardamos la ejecución del método router 
const express = require('express');
const router = express.Router();

//importamos el controlador de las rutas por defecto:
const mainController = require("../controllers/mainController")

// En lugar de app.jget, utilzamos router.get. 
//Procesa el pedido get con ruta / 
router.get('/', mainController.index); //del controlador principal quiero utilizar el método index.
//qué hace index? lo que teniamos antes:)
router.get("/registro", mainController.register);
router.get("/login",mainController.login);
router.get("/nuevo",mainController.nuevo);
//Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;