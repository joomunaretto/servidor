const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello world')
})

server.listen(3000, () => {
    console.log('servidor rodando na prota 3000');
});