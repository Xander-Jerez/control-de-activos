import axios from "axios";
import { useRouter } from "next/router";
import React,{useEffect, useState, Component} from "react";
import Header from "../../../components/header/header.component"
import EditarEntrega from "../../../components/editarEntrega";

const Modificar = ()=>{
    const [producto,setProducto] = useState([]);
    class Pestaña extends Component {
        componentDidMount() {
            document.title = 'Modificar';
        }
        render() {
          return
        }
    }

    const router = useRouter();
    const id = router.query.entrega;

    const getProducto = async()=>{
        if (id === undefined) {
            return;
        }
        const response = await axios.get(`${process.env.SERVIDOR}/entrega/show/${id}`);
        setProducto(response.data);
    };

    useEffect(()=>{
        getProducto();
    },[])
    console.log("Información del producto: ", producto);
    return(
        <div className="w-100">
            <Pestaña></Pestaña>
            <Header/>
            <br/><br/><br/><br/><br/>
            <h1 className="text-center h2 mt-2 mb-2" style={{fontFamily: 'Albertus'}}>Modificar Datos de Entrega</h1>
            { producto && (
                <EditarEntrega producto={producto} />
            )}
        </div>
    )
}

export default Modificar;