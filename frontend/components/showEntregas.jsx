import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ShowEntregas = ()=>{
    const router = useRouter();
    const [entregas, setEntregas] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const getEntregas = async ()=>{
            const response = await axios.get(`${process.env.SERVIDOR}/entregas`);
            setEntregas(response.data);
            setIsLoading(true);
            console.log(response.data);
    }
        useEffect(()=>{
        getEntregas()

    },[]);

    const deleteEntrega= async (id)=>{
        console.log(id);
        await axios.delete(`${process.env.SERVIDOR}/entrega/delete/${id}`);
        getEntregas();
    }

    if(isLoading){
        return (
            <div className="w-75 m-auto">
                <div className="w-75 d-flex justify-content-center align-items-center">
                    <h1 className="text-center mt-3 h2">Listado de Entregas registradas</h1>
                    <button className="btn btn-primary ms-3 mt-2" onClick={()=>{router.push("registrar/reg_entrega")}} >registrar entrega</button>
                </div>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>tipo</th>
                            <th>marca</th>
                            <th>modelo</th>
                            <th>n_serie</th>
                            <th>cod_servicio</th>
                            <th>imei</th>
                            <th>pin</th>
                            <th>puk</th>
                            <th>fecha_compra</th>
                            <th>descripcion</th>
                            <th>procesador</th>
                            <th>ram</th>
                            <th>tipo_almacenamiento</th>
                            <th>capacidad</th>
                            <th>observacion</th>
                            <th>otorga</th>
                            <th>recibe</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            entregas.map((asamblea,idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{entrega.tipo}</td>
                                        <td>{entrega.marca}</td>
                                        <td>{entrega.modelo}</td>
                                        <td>{entrega.n_serie}</td>
                                        <td>{entrega.cod_servicio}</td>
                                        <td>{entrega.imei}</td>
                                        <td>{entrega.pin}</td>
                                        <td>{entrega.puk}</td>
                                        <td>{entrega.fecha_compra}</td>
                                        <td>{entrega.descripcion}</td>
                                        <td>{entrega.procesador}</td>
                                        <td>{entrega.ram}</td>
                                        <td>{entrega.tipo_almacenamiento}</td>
                                        <td>{entrega.capacidad}</td>
                                        <td>{entrega.observacion}</td>
                                        <td>{entrega.otorga}</td>
                                        <td>{entrega.recibe}</td>
                                        <td className="">
                                                <button className="btn btn-success" onClick={()=>{router.push(`entrega/modificar/${entrega._id}`)}} >Modificar</button>
                                                <button onClick={()=>{deleteEntrega(entrega._id)}} className="btn btn-danger ms-2">Eliminar</button>
                                            </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    return <div>Sin resultados de Entregas</div>

}

export default ShowEntregas;