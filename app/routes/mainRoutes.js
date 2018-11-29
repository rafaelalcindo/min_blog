module.exports = (app) => {
    app.get('/',(req, res) => {
        console.log('entrou get');
    });

    app.post('/cadastrar/post', (req, res) => {
        //console.log('entrou cadastro post')
        app.app.controller.mainController.criarUmPost(app, req, res);
    });

    app.post('/cadastrar/import/post', (req,res) => {
        app.app.controller.mainController.importarArquivoJSON(app, req, res);
    })
}