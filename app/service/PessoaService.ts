import PessoaRepository from '../repository/PessoaRepository';

class PessoaService {

    ListarPessoas(){
        return PessoaRepository.find({});
    }

    BuscarPessoa(id){
        return PessoaRepository.findById({id});
    }

    CadastrarPessoa(pessoa){
        return PessoaRepository.create(pessoa);
    }

    AtualizarPessoa(id, pessoa){
        return PessoaRepository.findByIdAndUpdate(
            id, pessoa, {new: true}
        );
    }

    ExcluirPessoa(id){
        return PessoaRepository.findByIdAndDelete(id);
    }
}

export default new PessoaService();