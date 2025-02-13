const express = require("express");
const { Router } = express;
const app = express();
const PORT = process.env.PORT || 8080;

//IMPLEMENTACION
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(PORT, () =>
 console.log("SERVER ON http://localhost:" + PORT)
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});

const msgs = [];

io.on("connection", (socket) => {
    //console.log("Se creo un socket nuevo " + socket.id);
    //socket.emit("msg", "hola front!");
    
    msgs.push({
        socketid: socket.id,
        email: '',
        mensaje: 'Se conecto fulanito ' + socket.id,
    });
    io.sockets.emit("msg-list", msgs);
    
    
    socket.on("msg", (data) =>{
        console.log("data", data);
        msgs.push({
            socketid: socket.id,
            email: data.email,
            mensaje: data.mensaje,
        });

        io.sockets.emit("msg-list", msgs);
    });
    socket.on("disconnect", (reason)=> {
        console.log(reason + " " + socket.id);
    });
});