'use strict';
{
    let colors = require('../../node_modules/colors');

    /* Descrição:
        O método map() invoca a funcão passada como argumento para 
        cada elemento da Array.

        map(*** callback ***[, thisArg]) onde:
            callback(elementoAtual, indice, array) em que os argumentos
            'indice' e array são opcionais

    */

    // Objeto que guarda funções transformadoras
    let transformaMt = {
        emKm: metro  => metro / 1000,
        emCm: metro => metro * 1000
    };

    let metros = [1, 3, 10, 100, 1000];
    console.log("Metros:".green, metros);

    // (Maneira 'antiga') Transformar a lista de metros em kilometros usando for
    let kilometros = [];
    for (let i = 0; i < metros.length; i++) {
        kilometros[i] = transformaMt.emKm(metros[i]);
    }
    console.log('Kilometros:'.red, kilometros);

    // (Maneira 'moderna') Transformar a lista de metros em kilometros usando map
    kilometros = metros.map((valorAtual, indice, array) => {
        return transformaMt.emKm(valorAtual)
    });
    console.log('Kilometros:'.green, kilometros);

    // Vamos ver com mais calma...
    console.log('# Iterando sobre a variavel "metros" usando ".map":'.red);
    kilometros = metros.map((valorAtual, indice, array) => {
        console.log('## O valor atual é:'.blue, valorAtual);
        console.log('## O indice atual é:'.blue, indice);
        console.log('## A array iterada é:'.blue, array);

        let emKm = transformaMt.emKm(valorAtual);

        console.log('## O valor atual convertido em KM é:'.blue, emKm);
        console.log('--------------------'.yellow.bold);
        return emKm;
    });

    console.log('### De novo. Kilometros:'.green, kilometros);
}