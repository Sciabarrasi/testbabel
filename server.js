const express = require("express");
const { Router } = express;
const multer = require('multer');
const app = express();
const routerUsuarios = Router();
const port = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/public', express.static(__dirname + '/public'));

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});

app.use("/api/usuarios", routerUsuarios);

app.use((req, res, next)=>{
    next();
})

let usuarios = [{id: 100, nombre: 'monica', edad: 20},
                {id: 101, nombre: 'juan', edad: 20},
                {id: 102, nombre: 'nacho', edad: 20},
                {id: 103, nombre: 'nicolas', edad: 20}];

app.get('/', (req, res)=>{
    res.send('<h1>HOLA NOSOTROS LA 43495</h1>')
});

app.get('/formulario', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname +
            '-' +
            Date.now() +
            '-' +
            file.originalname.split('.').pop()
        );
    },
});
const upload = multer ({ storage: storage });

app.post('/uploadfile', upload.single('myFile'), (req, res)=>{
    const file = req.file;
    if(!file){
        res.send({ error: true });
    }else{
        //res.send(file);
        res.send({succes: true});
    }
});

app.get('/en/un/lugar/muy/puntual',
(req, res, next)=> {
    console.log('estan /en/un/lugar/muy/puntual');
    next() 
},
    (req, res)=>{
    res.send('<h1>ASHEEEE</h1>')
});

//routerUsuarios.use();

routerUsuarios.get("/",(req, res)=>{
    const { query } = req;

    if(query?.nombre){
        const usuariosFiltrado = usuarios.filter(
            (usuario) => usuario.nombre == query.nombre);
            return res.json(usuariosFiltrado)
    }
    res.json(usuarios);
})
routerUsuarios.get("/:id", (req, res)=>{
    const { id } = req.params;

    const usuarioEncontrado = usuarios.find((usuario) => usuario.id == id);
    if(usuarioEncontrado){
        res.json({succes: true, user: usuarioEncontrado});
    }else{
        res.json({error: true, msg:"no encontrado"});
    }
});

routerUsuarios.post('/',(req, res)=>{
    const { body } = req;
    usuarios.push(body);
    res.json('ok');
})

routerUsuarios.put('/:id', (req, res)=>{
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

routerUsuarios.delete('/:id', (req, res)=> {
    const { id } = req.params;
    usuarios = usuarios.filter((usuario) => usuario.id != id);
    res.json({succes: true, usuarios: usuarios.length});
})
