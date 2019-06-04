const fs = require('fs');
const colors = require('colors');

let listarTabla = ( base, limite = 10)=>{
    if(!Number(base) || !Number(limite)){
        reject(`el valor introducido '${base}' o '${limite}'  no es un número`.red);
        return;
    }
    for(let i=1; i<= limite; i++){
        console.log(`${ base } * ${ i } = ${ base * i }`.green);
    }
}



let crearArchivo = (base,limite = 10) =>{
    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            reject(`el valor introducido '${base}' o '${limite}'  no es un número`.red);
            return;
        }

        let data = '';
        for (let i=1; i <= limite; i++){
            data += (`${base} *  ${i} = ${ base * i } \n`);
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data , (err) =>{
            if(err)
             reject(err);
             else
                resolve (`tabla_${ base }.txt`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}