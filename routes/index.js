const express = require("express");
const fs = require("fs"); //*Para leer la ruta de directorio
const router = express.Router();

const PATH_ROUTES = __dirname; //*Devuelve el path en donde está ubicado este archivo "index.js" (ruta absoluta)

//console.log(PATH_ROUTES);
//const a= fs.readdirSync(PATH_ROUTES); //retorna un array

//[ 'index.js', 'users.js' ]
const removeExtension = fileName =>{
    return fileName.split('.').shift(); // Soloe se obtiene el nombre Shift=Primer elemento del arreglo, es decir, en este caso el nombre del archivos
}
//El código anterior se puede reducir en una línea
//const removeExtension = fileName => fileName.split('.').shift();

fs.readdirSync(PATH_ROUTES).filter( file => {
    console.log(file);
    const name = removeExtension(file);
    if(name !== 'index'){
        console.log('Loading...' + name);
        router.use(`/${name}`, require(`./${file}`));
        
    }    
 });

 module.exports = router;
 //*http://localhost:3000/api/users