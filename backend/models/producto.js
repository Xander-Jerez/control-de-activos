const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({

    codigo:{
        type:String,
        required:true,
    },

    nombre:{
        type:String,
        required:true,
    },

    cantidad:{
        type:Number,
        required:true,
    },

    descripcion:{
        type:String,
        required:false,
    },
})
module.exports=mongoose.model('producto', ProductoSchema);
