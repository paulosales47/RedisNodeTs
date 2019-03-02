import * as mongoose from 'mongoose';

import PessoaModel from '../models/PessoaModel';

export default mongoose.model('pessoas', PessoaModel);