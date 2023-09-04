const producto=require('../models/producto');

const createProducto =(req,res) =>{
    const {codigo,nombre,cantidad,descripcion}=req.body;

    if(codigo && nombre && cantidad ){
        const newProducto = new producto({
            codigo,
            nombre,
            cantidad,
            descripcion
        });

        try {
            newProducto.save();

            res.status(202).json({
                message: "producto creado correctamente"
            })
        }
        catch (error) {
            res.status(400).json({
                message: 'No se pudo registrar el producto'
            })
        }
    }else{
        return res.status(400).json({
            mensaje:"Por favor llene todos los campos"
        })
    }
}

const getProductos = (req, res) => {
    producto.find({}, (err, productos) => {
        if (err) {
            return res.status(400).send({ message: "No se han podido obtener los productos" })
        }
        return res.status(200).send(productos)
    })
}

const getProducto = (req,res)=>{
    const {id} = req.params;

    producto.findById(id,(err,producto)=>{
        if(err){
            return res.status(400).send({ message: "No se ha podido obtener el Producto" })
        }
        return res.status(200).send(producto)
    });
}

const updateProducto = (req,res)=>{
    const {id} = req.params;

    producto.findByIdAndUpdate(id,req.body,(err,producto)=>{
        if (!producto) {
            return res.status(404).send({ message: "No se ha encontrado el producto" })
        }
        if (err) {
            return res.status(400).send({ message: "No se ha podido modificar el producto" })
        }
        producto.save();
        return res.status(200).send({message:"Datos del producto modificados correctamente"});
    });
}

const deleteProducto = (req,res)=>{
    const {id} = req.params;

    producto.findByIdAndDelete(id,(err,producto)=>{
        if (err) {
            return res.status(400).send({ message: "No se ha podido eliminar el producto" })
        }
        if (!producto) {
            return res.status(404).send({ message: "No se ha encontrado el producto" })
        }
        return res.status(200).send({message:"Producto eliminado correctamente",producto:producto});
    })
}

module.exports={
    createProducto,
    getProductos,
    updateProducto,
    deleteProducto,
    getProducto
}