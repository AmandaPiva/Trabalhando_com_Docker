const express = require('express'); //chamando o express

//as linhas de baixo definem a porta onde o servidor irá rodar e qual host
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express(); //instanciando o express

//fazendo a solicitação via get
app.get('/', (req, res) => {
    res.send('Hello World teste'); //que irá nos retornar a seguinte mensagem
});

app.listen(PORT, HOST); 
