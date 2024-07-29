//Requerimos path para poder enviar los archivos HTML

const path = require ("path");

//Creamos el objeto literal con los métodos a exportar
const mainController = {
    //Manejo del pedido get con ruta /
    index: (req,res) => {
         res.render("index");//le digo a mi controlador que quiero renderizar una vista, no mostarr un texto
        //uso el método render, cambiando el método send y menciono el nombre de la vista que quiero renderizar (index)
    },
    register: (req,res)=>{
        res.render("registro");
    },
    login: (req,res)=> {
        res.render("login");
    },
    nuevo: (req,res) => {
        //res.sendFile(path.join(__dirname, "../views/partials/nuevo.html"));
        res.render("..partials/nuevo");
    }
};

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador.
module.exports = mainController;