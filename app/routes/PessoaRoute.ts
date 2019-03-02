import * as express from 'express'

import PessoaController from '../controllers/PessoaController';

class PessoaRoute{

    constructor(app: express.Application, rota: string){

        let rotaId = rota.concat('/:id');

        app.route(rota).get(PessoaController.ListarPessoas);
        app.route(rotaId).get(PessoaController.BuscarPessoa);
        app.route(rota).post(PessoaController.CadastrarPessoa)
        app.route(rotaId).put(PessoaController.AtualizarPessoa);
        app.route(rotaId).delete(PessoaController.ExcluirPessoa);
    }
}

export default PessoaRoute;