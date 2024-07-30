//Requerimos express y lo ejectuamos para tener disponibles los métodos que vamos a utilizars
const express = require('express');
const app = express();
const path = require('path');

//acá llamo a express, lo ejecuto y lo guardo en app, para luego usarla en todos lados. En el enrutador pasa igual. 
//configuraciones: 
//para que sepa que vamos a utilizar el motor de ejs, con el método app.set.
app.set('view engine', 'ejs'); //le decimos que vamos a utilizar un motor de vistas, y luego cuál es: ejs)
//definir dónde esta la carpeta de las vistas
app.set('views', path.join(__dirname, 'views'));

// Usar recursos estáticos
app.use(express.static(path.join(__dirname, 'public')));
//"./es para navegar dentro de la carpeta donde estoy. ".." es para salir de la carpeta
//esto le avisa a express que los archivos vienen de una carpeta publica, sin solicitarlos mediante un request
//con el método use le indico a la aplicación que quiero usar la carpeta para guardar todo lo relacionado con archivos css, imgs y demás para acceder de forma sencilla
//Configuramos el motor de plantillas: le estamos diciendo a la aplicación que 
//vamos a utilizar un motor de plantillas, que va a ser ejs.


// TRAEMOS AL MÓDULO QUE CREAMOS EN RUTAS: Importar los distintos enrutadores. Tenemos que pasarle la pelota al enrutador de productos. 

const productsRouter = require('./src/routes/productsRouter.js');
const usersRouter = require('./src/routes/usersRouter.js');
const mainRouter = require('./src/routes/mainRouter.js');//importo el router. Estos los estamos exportando, el require es de un paquete / módulo que nosotros tenemos.  

//Usando los enrutadores importados:
//nuestro entry point se ve bastante prolijo, ya que tenemos un archivo de rutas por cada uno de los recursos:
app.use('/products', productsRouter); //Todas las rutas qeu comiencen con el prefijo "/productos" van a ser respondidas por la variable productsRouter
app.use('/users', usersRouter); //uso el router
app.use('/', mainRouter);


//si algo viene de productos, la responsabilidad le responde al enrutador de productos, y así con usuarios. Los estamos exportando con el require de arriba.
//Ponemos a escuchar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en ${PORT}`);
    });



