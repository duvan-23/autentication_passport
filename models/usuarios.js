import mongoose from 'mongoose';

const usuariosCollection = 'usuarios';

const UsuariosSchema= new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    direccion: {type: String, required: true}
});

export  const usuarios = mongoose.model(usuariosCollection, UsuariosSchema);