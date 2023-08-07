const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntregaSchema = new Schema({

    tipo:{
        type:String,
        required:true,
    },

    marca:{
        type:String,
        required:true,
    },

    modelo:{
        type:String,
        required:true,
    },

    n_serie:{
        type:Number,
        required:false,
    },

    cod_servicio:{
        type:String,
        required:false,
    },

    imei:{
        type:Number,
        required:false,
    },

    pin:{
        type:Number,
        required:false,
    },

    puk:{
        type:Number,
        required:false,
    },

    fecha_compra:{
        type:Date,
        required:true,
    },

    descripcion:{
        type:String,
        required:false,
    },

    procesador:{
        type:String,
        required:false,
    },

    ram:{
        type:Number,
        required:false,
    },

    tipo_almacenamiento:{
        type:String,
        required:false,
    },

    capacidad:{
        type:Number,
        required:false,
    },

    observacion:{
        type:String,
        required:false,
    },

    otorga:{
        type:String,
        required:false,
    },

    recibe:{
        type:String,
        required:false,
    },
})
module.exports=mongoose.model('entrega', EntregaSchema);
