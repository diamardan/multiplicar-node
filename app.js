const { argv } = require('./config/yargs'); //  ||   const argv  = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
    case 'listar': 
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear': 
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log( `Archivo creado: ${ archivo.green }`))
            .catch(err => console.log(err));
        break;

    default: console.log('comando no reconocido'.red);
}
//let argv = process.argv;
//let params = [argv[2], argv[3]];
//let base = params[0].split('=')[1];
//let limite = params[1].split('=')[1];

//import { crearArchivo } from 'multiplicar/multiplicar'
/*let data = '';
for (let i=1; i <= 10; i++){
    console.log(`${base} *  ${i} = ${ base * i } \n `);
    data += (`${base} *  ${i} = ${ base * i } \n`);
}

fs.writeFile(`tablas/tabla_${base}.txt`, data , (err) =>{
    if(err) throw err;

    console.log('el archivo ha sido creado');
});
*/

/*
crearArchivo(base,limite)
    .then(archivo => console.log( `Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));
    */