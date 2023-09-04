# Usando Ubuntu 20.04 como imagen base
FROM ubuntu:20.04

# Definiendo variables de entorno para evitar interacciones durante la instalación de paquetes
ENV DEBIAN_FRONTEND=noninteractive

# Actualizando e instalando dependencias
RUN apt-get update && \
    apt-get install -y curl git apache2 openssh-server && \
    curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Configuración de SSH
EXPOSE 1468
RUN service ssh start

# Configuración de Apache
EXPOSE 1469
RUN service apache2 start

# Estableciendo el directorio de trabajo para la aplicación Node.js
WORKDIR /index

# Copiando e instalando las dependencias del proyecto
COPY package*.json ./
RUN npm install

# Copiando el resto de archivos de la aplicación
COPY . .

# Exponiendo el puerto de la aplicación Node.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
