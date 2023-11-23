const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let usuarios = [{id: 100, nombre: 'monica', edad: 20},
                {id: 101, nombre: 'juan', edad: 20},
                {id: 102, nombre: 'nacho', edad: 20},
                {id: 103, nombre: 'nicolas', edad: 20}];


app.get("/api/usuarios", (req, res)=>{
    const { query } = req;

    if(query.nombre){
        const usuariosFiltrado = usuarios.filter(
            (usuario) => usuario.nombre == query.nombre);
            return res.json(usuariosFiltrado)
    }
    res.json(usuarios);
})

app.get("/api/usuarios/:id", (req, res)=>{
    const { id } = req.params;

    const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id);
    if(usuarioEncontrado){
        res.json({succes: true, user: usuarioEncontrado});
    }else{
        res.json({error: true, msg:"no encontrado"});
    }
});

app.post('/api/usuarios',(req, res)=>{
    const { body } = req;
    usuarios.push(body);
    res.json('ok');
})

app.put('/api/usuarios/:id', (req, res)=>{
    const id = req.params.id;
    const body = req.body;

    const indiceEncontrado = usuarios.findIndex((usuario) => usuario.id == id);
    if(indiceEncontrado >= 0){
        usuarios[indiceEncontrado] = body;
        res.json({succes: true, user: indiceEncontrado});
    }else{
        res.json({error: true, msg:"no encontrado"});
    }
});

app.delete('/api/usuarios/:id', (req, res)=> {
    const { id } = req.params;
    usuarios = usuarios.filter((usuario) => usuario.id != id);
    res.json({succes: true, usuarios: usuarios.length});
})


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});