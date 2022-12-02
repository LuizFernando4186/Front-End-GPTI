const express = require('express');//Importanto o express, mostrar arquivo estatico
const path = require('path');//importando o Path
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/FRONT-END-GPTI/'));

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/dist/FRONT-END-GPTI/index.html');
});

app.listen(PORT, () =>{
    console.log('Servidor Iniciado na porta ' + PORT);
});