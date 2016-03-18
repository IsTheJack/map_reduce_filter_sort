'use strict';
{
    let colors = require('../../node_modules/colors');
    let pessoas = require('../dados/pessoas.js');

    /* Descrição:
        O método filter retorna uma nova array com base no retorno do teste
        do callback passado como argumento. Se o retorno é true, então ele
        retorna o elemento. Se false, o elemento não é retornado.

        filter(*** callback ***[, thisArg]) onde:
            callback(elemento, indice, array) em que os argumentos
            'indice' e array são opcionais

    */

    // Mulheres de fora de Resende com mais de 22 anos e que gostam de pescar
    let mulheres = pessoas.filter((elemento, indice, array) => {
        let deResende = elemento.cidade === 'Resende';
        let mulheres = elemento.sexo === 'F';
        let queGostamDePescar = elemento.hobbies
                            .filter(elem => elem === 'pescar').length > 0;

        // Outra forma de fazer explorando a API do Javascript
        queGostamDePescar = elemento.hobbies.some(x => x === 'pescar');
        
        return mulheres && !deResende && queGostamDePescar;
    });
    console.log('Mulheres:'.red, mulheres);

    // Homens com mais de 1.75 metros de altura e com o nome curto (não mais que
    // 6 letras)
    let homens = pessoas.filter((x) => 
        x.altura > 1.75 && x.nome.length <= 6 && x.sexo === 'M'
    );
    console.log('Homens:'.red, homens);

    // Simples, não? :)
}