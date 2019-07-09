## Insatalación

```sh
$ npm install
```

Listo. Todas las dependencias estan cargadas en package.json.  
  

## Para correr la aplicación en modo de **desarrollo**

Desde el directorio funte del proyecto corre:

```sh
$ npm run dev
```
Esto armará el build de desarrollo y abrirá un servidor de prueba en http://localhost:8080

## Para correr la aplicación en modo **producción**

Desde el directorio funte del proyecto, primero hay que hacer el 'build' de la apliación.  
El primer comando corre un proceso de webpack y entrega una version minificada de la aplicación en public/dist.  
El segundo comando arranca un servidor de Node en modo production en el puerto 8080. (http://localhost:8080)

```sh
$ npm run build
$ npm run start
```