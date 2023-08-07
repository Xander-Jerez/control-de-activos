const entrega=require('../models/entrega');

const createEntrega =(req,res) =>{
    const {tipo, marca, modelo, n_serie, cod_servicio, imei, pin, puk, fecha_compra, descripcion, procesador, ram, tipo_almacenamiento, capacidad, observacion, otorga, recibe}=req.body;

    if(tipo && marca && modelo && n_serie && cod_servicio && imei && pin && puk && fecha_compra && descripcion && procesador && ram && tipo_almacenamiento && capacidad && observacion && otorga && recibe){
        const newEntrega = new entrega({
            tipo,
            marca,
            modelo,
            n_serie,
            cod_servicio,
            imei,
            pin,
            puk,
            fecha_compra,
            descripcion,
            procesador,
            ram,
            tipo_almacenamiento,
            capacidad,
            observacion,
            otorga,
            recibe
        });

        try {
            newEntrega.save();

            res.status(202).json({
                message: "entrega realizada correctamente"
            })
        }
        catch (error) {
            res.status(400).json({
                message: 'No se puede registrar la entrega'
            })
        }
    }else{
        return res.status(400).json({
            mensaje:"Por favor llene todos los campos"
        })
    }
}

const getEntregas = (req, res) => {
    entrega.find({}, (err, entregas) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener las entregas" })
        }
        return res.status(200).send(entregas)
    })
}

const getEntrega = (req,res)=>{
    const {id} = req.params;

    entrega.findById(id,(err,entrega)=>{
        if(err){
            return res.status(400).send({ message: "No se ha podido obtener la entrega" })
        }
        return res.status(200).send(entrega)
    });
}

const updateEntrega = (req,res)=>{
    const {id} = req.params;

    entrega.findByIdAndUpdate(id,req.body,(err,entrega)=>{
        if (!entrega) {
            return res.status(404).send({ message: "No se ha encontrado la entrega" })
        }
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar la entrega" })
        }
        entrega.save();
        return res.status(200).send({message:"Datos de la entrega modificados correctamente"});
    });
}

const deleteEntrega = (req,res)=>{
    const {id} = req.params;

    entrega.findByIdAndDelete(id,(err,entrega)=>{
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar la entrega" })
        }
        if (!entrega) {
            return res.status(404).send({ message: "No se ha encontrado la entrega" })
        }
        return res.status(200).send({message:"entrega eliminada correctamente",entrega:entrega});
    })
}

module.exports={
    createEntrega,
    getEntregas,
    updateEntrega,
    deleteEntrega,
    getEntrega
}