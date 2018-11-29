const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UsuarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    conteudo: String,
    autor: String,
    data_criacao: { type: Date, default: Date.now },
    nome_filme_analisado: String,
    comentario: [{
        _id: mongoose.Schema.Types.ObjectId,
        nome_autor: String,
        comentario: String,
        data_comentario: { type: Date, default: Date.now }
    }]

});

module.exports = UsuarioSchema;