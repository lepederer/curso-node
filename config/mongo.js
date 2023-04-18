const mongoose = require("mongoose");

const dbConnect = () => {
    //const DB_URI = process.env.DB_URI;
    const DB_URI = 'mongodb://localhost:27017/db_usuarios';

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, res) => {
        if(!err){
            //*Si no hay error
            console.log('****Conexión Correcta****');
        }else{
            console.log('**** Error en la conexión');
        }
    
    });
};

module.exports = dbConnect;

//* useNewUrlParser: si no se especidica monggose utilizará un método obsoleto, para intentar parsear la uri de conexión
//* useUnifiedTopology: true para que intente la conexión cada milisegundo
