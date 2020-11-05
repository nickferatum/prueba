const express = require('express');

const app = express();

app.get('/', (solicitud, respuesta) => {
    respuesta.send('<h1>hola</h1>');
})

app.listen(3000, ()=>{
    console.log('el servidor ya esta encendido http://localhost:3000');
})

console.log('hola2')