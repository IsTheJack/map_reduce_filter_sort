'use strict';
{
    let colors = require('../../node_modules/colors');
    let pessoas = require('../dados/pessoas.js');

    let sexoOposto = (sexo) => sexo === 'M'? 'F': (sexo === 'F'? 'M': 'N/A');

    let listaPessoasPossibilidades = pessoas.map((x, index, arr) => {
        x.pessoasId = arr.filter((y) => 
            y.sexo === sexoOposto(x.sexo) && y.hobbies.every((yHobby) => x.hobbies.some((xHobby) => yHobby === xHobby))
        ).sort((yAtual, yPosterior) => yAtual.hobbies.length - yPosterior.hobbies.length).map((y) => y._id);
        return x;
    });

    console.log(listaPessoasPossibilidades);
}
