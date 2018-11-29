const mongoose = require('mongoose');
var fs = require('fs');
var csv = require('csv-parser');
var loadJsonFile = require('load-json-file');

const PostSchema = require('../model/Post');
const postModel = mongoose.model('Post', PostSchema);
var post = new postModel;

module.exports.criarUmPost = (app, req, res) => {

    //console.log('entrou controller post ');

    post._id = new mongoose.Types.ObjectId;
    post.titulo   = req.body.titulo;
    post.conteudo = req.body.conteudo;
    post.autor    = req.body.autor;
    post.nome_filme_analisado = req.body.nome_filme_analisado;

    post.save()
        .then(resposta => {
            res.status(200).json(resposta)
        })
        .catch(error => res.status(500).json(error));

    
}

module.exports.importarArquivoJSON = (app, req, res) => {
    let dir = "app/assets/json";
    let file = req.files.postJson;
    file.mv(dir+"/"+file.name);
    dir = dir +"/"+file.name;

   /* console.log('arquivo: ', req.files.postJson);
    
    console.log('arquivo: ',file.data);
    let path = 
    loadJsonFile('MOCK_DATA.json').then(json => {
        console.log('file: ',json);
    })
    */
     console.log('dir: ', dir);
    //let content = fs.readFileSync(__dirname+'/MOCK_DATA.json');
    let content = fs.readFileSync(dir);
    let jsonContent = JSON.parse(content);

    postModel.insertMany(jsonContent, (err) => {
        if(err) console.log('erro');

        res.status(200).json({'messagem':'Cadastrado com sucesso'});
    })

    /*jsonContent.map(resu => {
        console.log('resu: ', resu.titulo);

        post._id = new mongoose.Types.ObjectId;
        post.titulo   = resu.titulo;
        post.conteudo = resu.conteudo;
        post.autor    = resu.autor;
        post.nome_filme_analisado = resu.nome_filme_analisado;

        post.insertMany(resu)


    }) */
    
}   

module.exports.importArquivoCSV = (app, req, res) => {
    fs.createReadStream
}