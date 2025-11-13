let eventos = require('events'); // Atribuição da classe EventEmitter a uma variável
let EmissorEventos = eventos.EventEmitter;
let ee = new EmissorEventos();
//ou criando direto sem a variável intermediária
//let ee = new eventos.EventEmitter();
//mas da forma anterior é uma boa prática

//É registrado um ouvinte (listener) para o evento 'dados'.
//Quando esse evento acontecer executa a função passada como argumento
ee.on('dados', function(fecha){
    console.log(fecha);
});
// Emissão do evento somente uma vez
ee.emit('dados', 'primeira vez' + Date.now());

// Emissão do evento a cada 500 milissegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);