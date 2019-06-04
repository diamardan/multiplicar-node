const opt = {
    base:{
        demand:true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
                .command('listar', 'imprime en consola la tabla de multiplicar', opt)
                .command('crear', 'genera un archivo de texto con la tabla de multiplicar de los numeros proporcionados',opt)
                .help()
                .argv;


module.exports = {
    argv
}