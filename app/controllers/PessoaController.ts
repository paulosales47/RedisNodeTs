import * as HttpStatus from 'http-status';
import * as redis from 'redis';

import PessoaService from '../service/PessoaService';

const clienteRedis = redis.createClient();

class PessoaController{

    ListarPessoas(requisicao, resposta){

        clienteRedis.get('pessoas', function(erro, pessoas){
            if(pessoas){
                resposta.writeHeader(HttpStatus.OK, {'content-type': 'application/json'})
                resposta.write(pessoas);
                resposta.end();
            }
            else
            {
                PessoaService.ListarPessoas()
                .then(pessoas => {
                    if(pessoas){
                        clienteRedis.set('pessoas', JSON.stringify(pessoas));
                        clienteRedis.expire('pessoas', 20);
                        resposta.status(HttpStatus.OK).send(pessoas)
                    }
                    else
                        resposta.status(HttpStatus.NOT_FOUND).send({mensagem: 'Nenhuma pessoa cadastrada'});
                })
                .catch(erro => console.log.bind(console, `Erro: ${erro}`));
            }
        })
    }

    BuscarPessoa(requisicao, resposta){
        let id = requisicao.parans.id;

        PessoaService.BuscarPessoa(id)
        .then(pessoa => {
            if(pessoa)
                resposta.status(HttpStatus.OK).send(pessoa)
            else
                resposta.status(HttpStatus.NOT_FOUND).send({mensagem: 'Nenhuma pessoa localizada'});
        })
        .catch(erro => console.log.bind(console, `Erro: ${erro}`));
    }

    CadastrarPessoa(requisicao, resposta){
        let pessoa = requisicao.body;

        PessoaService.CadastrarPessoa(pessoa)
        .then(pessoa => resposta.status(HttpStatus.CREATED).send(pessoa))
        .catch(erro => console.log.bind(console, `Erro: ${erro}`));
    }

    AtualizarPessoa(requisicao, resposta){
        let id = requisicao.parans.id;
        let pessoa = requisicao.body;

        PessoaService.AtualizarPessoa(id, pessoa)
        .then(pessoa => {
            if(pessoa)
                resposta.status(HttpStatus.OK).send(pessoa)
            else
                resposta.status(HttpStatus.NOT_MODIFIED).send({mensagem: 'Nenhuma pessoa localizada'});
        })
        .catch(erro => console.log.bind(console, `Erro: ${erro}`));
    }

    ExcluirPessoa(requisicao, resposta){
        let id = requisicao.parans.id;

        PessoaService.ExcluirPessoa(id)
        .then(pessoa => resposta.status(HttpStatus.NO_CONTENT).send({mensagem: 'Pessoa excluida com sucesso'}))
        .catch(erro => console.log.bind(console, `Erro: ${erro}`));
    }
}

export default new PessoaController();