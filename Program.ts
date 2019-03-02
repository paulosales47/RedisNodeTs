import StartUp from './StartUp';

const PORTA = process.env.PORT || 3012

StartUp.app.listen(PORTA, ()=> {
    console.log(`Servidor executando na porta ${PORTA}`);
})