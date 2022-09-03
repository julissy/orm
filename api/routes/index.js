const bodyParser = require('body-parser');

const pessoas = require('./pessoasRoutes');
//adicionamos as rotas de niveis e turmas
const niveis = require('./niveisRoutes');
const turmas = require('./turmasRoutes');

//adicionamos as instâncias de níveis e turmas
//e refatoramos um pouco a função
module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
};