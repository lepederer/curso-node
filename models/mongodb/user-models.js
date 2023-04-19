const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true //email will be unique
        },
        telefono: {
            type: Number
        },
        empresa: {
            type: String
        }
    },
    {
        timestamps: true, //fecha en se creó ese usuario
        versionkey: false 
    }
);

//* Users es el nombre de la colección. Lo que se conoce en SQL como el nombre de la tabla
module.exports = mongoose.model("users", UserScheme);