import * as mongoose from 'mongoose';

const PessoaModel = new mongoose.Schema({
    PrimeiroNome: {type: String},
    UltimoNome: {type: String},
    Idade: {type: Number},
    DataNascimento: {type: Date},
    Ativo: {type: Boolean},
    Telefone: {type: String},
    Email: {type: String},
    Sexo: {type: String},
});

export default PessoaModel