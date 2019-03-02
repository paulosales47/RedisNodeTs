import * as mongoose from 'mongoose';

class Database{
    private DbUrl;

    constructor(){
        this.DbUrl = process.env.PORT 
        ? 'mongodb://conexao/pessoa'
        : 'mongodb://localhost:27017/pessoa'
    }

    createConnection(){
        mongoose.connect(this.DbUrl, {useNewUrlParser: true});
    }

}

export default new Database();