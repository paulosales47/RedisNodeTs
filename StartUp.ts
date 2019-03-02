import * as express from 'express'
import * as bodyParser from 'body-parser';

import PessoaRoute from './app/routes/PessoaRoute';
import Database from './app/infra/Database';

class StartUp{
    public app: express.Application
    
    constructor(){
        this.app = express();
        this.middler();
        this.router();
        Database.createConnection();
    }

    middler(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    router(): void {
        this.app.route('/').get((requisicao, resposta) => {
            resposta.send({versao: '0.0.1'});
        });

        new PessoaRoute(this.app, '/api/v1/pessoa');
    }
}

export default new StartUp();