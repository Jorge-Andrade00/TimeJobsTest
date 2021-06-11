# Backend Challenge Time Jobs
Esta api entrega los datos en tiempo real sobre la temperatura de las ciudades que se consultan. 
Utiliza la API de https://openweathermap.org/api, para obtener las ciudades que no se encuentren almacenadas en nuestra base de datos, y posteriormente son guardadas.
## Technologies
Proyecto creado con:
* Node JS: 14.17.0
* Express: 4.17.1
* Mongo DB: 4.4.6
## Instalación
* Luego de clonar este repositorio, se debe contar con una base de datos (MongoDB), y hacer la conexión a esta mediante el archivo dabase.js, y configurar las variables de entorno.
* El siguiente paso es instalar las dependencias del proyecto, para esto debes utilizar los siguientes comandos:
```
$ npm i
$ node index.js
```
O también podrias reemplazar el comando ```$ node index.js``` por ```npm run dev``` para utilizar Nodemon, en caso de querer hacer cambios en el proyecto

## Cómo usar?
Una vez se hayan completado los pasos anteriores, se podrá accedera la API desde el navegador, Postman, Insomania o entre otros utilizando la siguiente dirección: ```http://localhost:5000/api/getWeather/{ciudad}```
