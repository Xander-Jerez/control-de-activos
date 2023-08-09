# control-de-activos
Características Principales:
*Registro de Productos: Facilita la adición de nuevos productos al inventario, asegurando que toda
 la información relevante quede almacenada para futuras consultas.
*Registro de Entregas: Cada vez que un producto es entregado o se realiza una transacción, esta
 funcionalidad garantiza que se lleve un registro detallado.
*Listados: Visualiza y administra la lista completa de productos y entregas con facilidad, ayudando
 a la toma de decisiones basada en datos.

Tecnologías Utilizadas:
*Backend: Desarrollado en Node.js, encargado de toda la lógica de negocio y gestión de datos.
*Frontend: Implementado con Next.js, proporciona una experiencia de usuario fluida y dinámica.

El sistema se desarrolló con el objetivo principal de mejorar la eficiencia operativa y ofrecer
 transparencia en la gestión de activos de la organización.

# Software Stack
-Ubuntu:20.04 -NodeJS:19.3 -ReactJS:18.2 -Dotenv:16.0.3 -ExpressJS:4.18.2 -Mongoose:5.13.15 -MongoDB -MongoAtlas -NPM

# Conexión a la base de datos
para lograr una conexion exitosa en esta base de datos se debe registrar en la página oficial de MongoAtlas, crear la
base de datos luego copiar el string de conexion debe ser similar al siguiente:

mongodb+srv://Alexander_Jerez:<CLAVE>1@cluster0.sryn6le.mongodb.net/?retryWrites=true&w=majority

donde entre las <> se debe reemplazar el password por el que se le entrega al crear la base de datos.
Este string de conexion debe ser reemplazado en el archivo .env que se encuentra en la raiz del proyecto,
en la variable de entorno DB.

# DOCKER
Para lograr dockerizar el proyecto se deben ejecutar las siguientes instrucciones respectivamente:
-cd control-de-activos
-docker build -t control-de-activos-backend . 
  (se deben realizar los mismos pasos en el front, solo en esta linea de se debe cambiar "backend" por "frontend")
-docker run --rm -ti -p 3000 -v {ruta de backend/frontend}:/home control-de-activos
-cd home
-npm install
-np run dev / yarn run dev

"Clonación del repositorio"
Para obtener una copia del proyecto se debe clonar el repositorio de GitHub, para esto se debe ejecutar el
siguiente comando en la terminal:

-git clone https://github.com/Xander-Jerez/control-de-activos/(dependiendo si es "backend" o "frontend")

.env
recordar que cada vez que se clone el proyecto se debe crear el archivo.env con los siguientes datos:

PORT=3001
DB=mongodb+srv://Alexander_Jerez:6kg7lSH39kkgHWH1@cluster0.sryn6le.mongodb.net/?retryWrites=true&w=majority

Instalar dependencias del proyecto ambiente de desarrollo

Para instalar las dependencias del proyecto, se debe ejecutar el siguiente comando en la terminal:

Para el correcto funcionamiento del proyecto se deben dar permisos de administrador a la carpeta, para
esto se ejecuta el siguiente comando dentro de la carpeta raiz del proyecto:

chmod -R 777 .
Servidor de producción

Es importante considerar que para el funcionamiento correcto del proyecto deben estar corriendo los
proyectos en diferentes servidores donde deberan realizarse los pasos de instalación de dependencias y
configuración de variables de entorno.

Para configurar el servidor de producción se debe seguir los siguientes pasos en ambos servidores:

Iniciar el modo root e ingresar las credenciales de administrador del servidor:
-sudo su

Actualizar el sistema operativo:
-apt-get update

Instalar curl para descargar paquetes:
-apt-get install -y curl

Instalar autoclean para limpiar el sistema:
-apt-get -y autoclean

Instalar git para clonar el repositorio:
-apt-get install git

Instalar nano para editar archivos:
-apt-get install nano

Instalar nvm para instalar NodeJS:
curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

Reiniciar bash para que se puedan utilizar comandos de NVM:
-exec bash

Instalar version 18.16.0:
-nvm install 18.16.0

cambiar alias de NodeJS:
nvm alias deafult 18.16.0

Cambiar la version de NodeJS:
-nvm use default

Instalar yarn para instalar dependencias y pm2 para correr la aplicación:
-npm install -g yarn
-npm install -g pm2

Clonar el repositorio del proyecto como se menciona en el apartado "Clonación del repositorio"

Luego de haber clonado el repositorio se debe mover hacia la carpeta raiz del proyecto,
para esto se debe ejecutar el siguiente comando:
-cd control-de-activos

Instalar dependencias del proyecto ambiente de producción Si se encuentra en la carpeta raiz del
proyecto y desea instalar las dependencias, se debe ejecutar el siguiente comando:
-yarn install

Para poder ejecutar el proyecto se debe generar el .env en la carpeta raiz del proyecto, el cual
debe contener las variables mencionadas anteriormente dependiendo de cual de los proyectos este
corriendo, el frontend o el backend. Para generar el .env mediante terminal se debe ejecutar el
siguiente comando:
-touch .env

Para modificar el archivo .env se debe ejecutar el siguiente comando:
-nano .env

Para ejecutar el proyecto se debe ejecutar el siguiente comando en la terminal:
-pm2 start yarn -- dev

http://ipservidor:[puerto apache]
