const mongoose = require("mongoose");

//*Código extraído desde internet porque el original arroja error de conexión
const mongoURI = "mongodb://127.0.0.1:27017/clientes"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Mongo connected')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;

//* Código original del curso
// const dbConnect = () => {
//     //const DB_URI = process.env.DB_URI;
//     const DB_URI = "mongodb://127.0.0.1:27017/local";
//     //const DB_URI = "mongodb+srv://lepederer:0Pj0XFKQVjbVqK0L@cluster0.v4ndgvm.mongodb.net/test"
//     //const DB_URI = "";
//     mongoose.connect(DB_URI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }, (err, res) => {
//         if(!err){
//             //*Si no hay error
//             console.log("****Conexión Correcta****");
//         }else{
//             console.log("**** Error en la conexión");
//         }
    
//     });
// };

// module.exports = dbConnect;

//* useNewUrlParser: si no se especidica monggose utilizará un método obsoleto, para intentar parsear la uri de conexión
//* useUnifiedTopology: true para que intente la conexión cada milisegundo
