//realizando un descontructuring, sacando la propiedad dentro del objeto model del archivo index de la carpeta models/index

const { usersmodel } = require('../models');
//* El controlador se encarga de la lógica de nuestra aplicación (API)

//*Obtener la lista de usuario de la base de datos
const getUsers = async (req, res) => {
    const data = await usersmodel.find({}); //*traer todos los usuarios
    res.send({data});
};

//*crear un usuario dentro de la base de datos
const createUser = async (req, res) => {
    //*req request es la solicitud
    //* res response la respuesta
    //se debe capturar el body del request
    //con body se envía información a través de JSON en postman
    //*const body = req.body;
    const { body } = req;
    //Cualquiera de esras dos opciones son la misma, pero se usará la segunda(distructuring)
   console.log("el body: " + body);
    //Se usó Asyn y await porque 
   const data = await usersmodel.create(body);
   // res.send({data: data});
   res.send ({data}); //is the same as the previous line. Cuando la propiedad se llama igual que el objeto
   //no podemos enviar algo que no exista, data puede venir null o undefinied, para eso usaremos asyn await
   //Entonces esperará que el usuario sea creado en la línea 20 antes de enviar la data 
};

module.exports = { getUsers, createUser };
