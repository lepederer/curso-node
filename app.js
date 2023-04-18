require("dotenv").config(); //* Para decirle a la aplicacion que utilice las variables de entorno
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); //*Para evitar el error de origen cruzado. Por el momento todos los clientes se pueden conectar

const port = process.env.PORT || 3001; //*Esta linea depede require("dotenv").config(). En caso de que vaya a fallar se usa el puerto 3001

app.listen(port, () => {
    console.log(`Servidor en línea http://localhost:${port}`);

});
