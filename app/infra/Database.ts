import * as mongoose from 'mongoose';

class Database{
    private DbUrl;

    constructor(){
        this.DbUrl = 'mongodb://conexao_mongo/pessoa'
    }

    createConnection(){
        mongoose.connect(this.DbUrl, {useNewUrlParser: true});
    }

}

export default new Database();