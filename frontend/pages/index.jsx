import { Button,Container,Heading,HStack,Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState, Component } from 'react'

import imagen from './Imagenes/fondoReflejo.jpg';
function MostrarImagen() {
  return <img src={imagen} alt="Imagen" />;
}


function PantallaCompleta() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Función para actualizar el estado con el tamaño de la ventana
    function actualizarTamanoVentana() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    // Agregar un event listener para actualizar el tamaño de la ventana
    window.addEventListener('resize', actualizarTamanoVentana);

    // Actualizar el tamaño de la ventana por primera vez
    actualizarTamanoVentana();

    // Eliminar el event listener cuando se desmonte el componente
    return () => window.removeEventListener('resize', actualizarTamanoVentana);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 100, left: 0, width: '100%', height: '100%' }}>
      <img src="https://blog.portalvmi.com.br/wp-content/uploads/2022/02/20-A-importancia-da-Tecnologis-da-Informacao-1110x508.jpeg" style={{ width: windowSize.width, height: windowSize.height, filter: 'brightness(70%)' }} />
    </div>
  );
}

const index = () => {
  class Pestaña extends Component {
    componentDidMount() {
      document.title = 'Dpto. TI';
    }
    render() {
      return
    }
  }

  const router = useRouter()
  return (
    <div >
      <Pestaña></Pestaña>
      <Container maxW="container.x1" > 
        <HStack marginTop={"40px"} >
          <a href="/producto/..">
            <div>
              <img src="https://www.puertocoronel.cl/img/sitio/logo.png" alt="Random Image" position= "absolute"/>
            </div>
          </a>
          <Stack spacing={4} mt="10" >
            <h1>✆ 7100</h1>
          </Stack>
        </HStack>
      </Container>

      <div>
        <PantallaCompleta></PantallaCompleta>

        <Heading background='0' opacity= '100' as="h1" fontSize="2.1x" className="header" textAlign="center">
          <div style={{ position: 'fixed', top:150, left: 0, width: "100%", height: "100%", fontFamily: 'Albertus BLACK' }}>
            Departamento de <br/> Tecnologías de la <br/> Información
            <div >
              <Button style={{fontSize: '30px', padding: '60px'}} colorScheme="orange" textAlign="center"  onClick={() => router.push('./producto/produc_index')}>Inventario</Button>
              <Button style={{fontSize: '30px', padding: '60px'}} colorScheme="orange" textAlign="center"  onClick={() => router.push('./entrega/entrega_index')}>Entrega</Button>
            </div>
          </div>
        </Heading>
      </div>
    </div>
  )
}
export default index