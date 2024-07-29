const path = require ("path");
//Creamos UN objeto literal con varios métodos a exportar (listado, compra venta, detalle).
const productsController = {
    listado: (req,res) => {
        res.send("Listado de productos")
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    },
    //Manejo del pedido get con ruta /productos/compra
    compra: (req,res) => {
        res.send("Compra exitosa") 

    },
    //Manejo del pedido get con ruta /productos/venta
    venta: (req,res) => {
        res.send("Venta exitosa")
    }
}

//Procesa el pedido get con ruta /productos/numeroProducto
//Ruta parametrizada

detalle: (req,res) => {
    //En req.params tenemos el parámetro que definimos en el enrutador
    let productId = req.params.num;
    res.send("Detalle del producto " + productoId);
}

module.exports = productsController;