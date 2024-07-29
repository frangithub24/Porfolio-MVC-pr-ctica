const express = require('express');
const router = express.Router();

// Define tus rutas aquí
router.get('/', (req, res) => {
  res.send('Users Home Page');
});


module.exports = router; // Asegúrate de exportar el router correctamente