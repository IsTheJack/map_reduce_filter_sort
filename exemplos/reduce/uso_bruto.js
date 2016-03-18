'use strict';
{
    let colors = require('../../node_modules/colors');
    let pessoas = require('../dados/pessoas.js');

    /* Descrição:
        O método reduce aplica o retorno da função passada como agumento
        sobre um acumulador interno da função para cada elemento do Array.

        reduce(*** callback ***[, valorInicialAcumulador]) onde:
            callback(acumulador, valorAtual, indice, array) em que os argumentos
            'indice' e array são opcionais

    */

    // A média da idade das pessoas
    let mediaIdade = pessoas.reduce((anterior, atual, indice, array) => {
        return anterior + atual.idade;
    }, 0) / pessoas.length;
    console.log('Média da Idade:'.yellow, mediaIdade);

    // Mais simplificado ainda
    mediaIdade = pessoas.reduce(((acc, x) => acc + x.idade), 0) / pessoas.length;
    console.log('Média simplificada da Idade:'.green, mediaIdade);

    // Os nomes das pessoas (começando
    // com um '->' e separados por vírgula e com o
    // último nome precedido de 'e' ao invés de virgula).
    // ex: '-> Caio, Fernanda e João' (para uma lista
    // de tamanho 3)

    let strNomes = pessoas.reduce((anterior, atual, indice, array) => {
        let char = indice == 0? '' : (indice + 1 == array.length? ' e ': ', ');
        return anterior + char + atual.nome;
    }, '-> ');
    console.log('String com nomes:'.red, strNomes);

    // reduce, por padrão, trabalha iterando sobre a array da esquerda
    // para direita. Para trabalhar da direita para esqueda, usa-se reduceRight
    // Ex: aplicando reduce e reduceRight na mesma array, repare que o resultado
    // de cada método será diferente:

    let numeros = [2, 4];
    console.log('Usando reduce:'.yellow, numeros.reduce((acc, x) => acc / x));
    console.log('Usando reduceRight:'.green, numeros.reduceRight((acc, x) => acc / x));
}