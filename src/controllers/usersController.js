//Creo el objeto literal con los métodos a exportar
const usersController = {
    //Manejo del pedido get con ruta /usuarios/conectarse
    login: (req,res) => {
        res.send("Formulario de conexión")
    },
    //Manejo del pedido get con ruta /usuarios/registrarse
    register: (req,res) =>{
        res.send("Formulario de creación")
    },
    profile: (req,res) => {
        //lógico de mostrar el profile
    },
    list: (req, res) =>{
        res.render("userList");
    }
}

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador:
module.exports = usersController;