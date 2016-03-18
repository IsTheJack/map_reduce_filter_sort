'use strict';
{
    let colors = require('../../node_modules/colors');
    let pessoas = require('../dados/pessoas.js');

    /* Descrição:
        O método sort ODERNA O PRÓPRIO ARRAY e o retorna ordenado com base
        na sequência unicode ou com o critério do callback passado.

        filter([*** callback ***]) onde:
            callback(elementoAtual, proxElemento) em que o retorno
            deve ser um number onde:
                maior que zero: O elemento atual deve prececer o próximo elemento.
                menor que zero: O elemento atual deve ser precedido pelo próximo
                                elemento.
                igual a zero: Ambos elementos constituem uma igualdade

    */

    // Ordenar pessoas pela altura (menor para o maior)
    let pessoasOrdenadas = pessoas.sort((a, b) => a.altura - b.altura);
    console.log('Pessoas ordenadas por altura'.red, pessoasOrdenadas);

    // Ordenar pessoas pela idade (maior para o menor)
    pessoasOrdenadas = pessoas.sort((a, b) => b.idade - a.idade);
    console.log('Pessoas ordenadas por idade'.red, pessoasOrdenadas);

    pessoasOrdenadas = pessoas.sort((a, b) => {
        if(a.nome < b.nome) return -1;
        if (b.nome < a.nome) return 1;
        return 0;
    });
    console.log('Pessoas ordenadas por nome'.red, pessoasOrdenadas);
}