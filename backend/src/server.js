const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

//Na conexão coloca em sala por box
io.on("connection", socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    });
    console.log('ok');
});

//Conexão mongodb
mongoose.connect('mongodb+srv://Rocketbox:1234@cluster0-05y4v.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
);

//
app.use((request, response, next) => {
    request.io = io;
    return next();
});

app.use(express.json());
//Arquivos
app.use(express.urlencoded({ extended: true }));
//redireciona para buscar arquivos
app.use('/files', express.static(path.resolve(__dirname,'..','tmp')));
//importando rotas

app.use(require('./routes'));

server.listen( process.env.PORT || 3000 );


