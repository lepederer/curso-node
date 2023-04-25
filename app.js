require("dotenv").config(); //* Para decirle a la aplicacion que utilice las variables de entorno
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongo.js");
const app = express();

app.use(cors()); //*Para evitar el error de origen cruzado. Por el momento todos los clientes se pueden conectar

const port = process.env.PORT || 3001; //*Esta linea depede require("dotenv").config(). En caso de que vaya a fallar se usa el puerto 3001

//* Aquí se cargarán nuestras rutas
//* http://localhost:3000/api/"nombredelaruta"
// app.use("/api", (req, res) => {
//     res.send({saludo: 'Hola, ruta accedida'}); 
// });
app.use("/api", require("./routes"));

//*Pasamos como primer argumento el puerto y luego una función
app.listen(port, () => {
    console.log(`Servidor en línea http://localhost:${port}`);

});

dbConnect();
