//Json da questão
let dadosJSON = [
    {"dia": 1, "faturamento": 150},
    {"dia": 2, "faturamento": 100},
    {"dia": 3, "faturamento": 100},
    {"dia": 4, "faturamento": 0},
    {"dia": 5, "faturamento": 1000},
    {"dia": 6, "faturamento": 1040},
    {"dia": 7, "faturamento": 1060},
    {"dia": 8, "faturamento": 1400},
    {"dia": 9, "faturamento": 10620},
    {"dia": 10, "faturamento": 106540},
    {"dia": 11, "faturamento": 100.44},
    {"dia": 12, "faturamento": 100.8465},
    {"dia": 13, "faturamento": 106540},
    {"dia": 14, "faturamento": 10055},
    {"dia": 15, "faturamento": 10075},
    {"dia": 16, "faturamento": 100454},
    {"dia": 17, "faturamento": 54100},
    {"dia": 18, "faturamento": 1600},
    {"dia": 19, "faturamento": 10660},
    {"dia": 20, "faturamento": 18400},
    {"dia": 21, "faturamento": 10770},
    {"dia": 22, "faturamento": 164500},
    {"dia": 23, "faturamento": 54100},
    {"dia": 24, "faturamento": 545100},
    {"dia": 25, "faturamento": 564100},
    {"dia": 26, "faturamento": 15400},
    {"dia": 27, "faturamento": 8100},
    {"dia": 28, "faturamento": 6100},
    {"dia": 29, "faturamento": 16400},
    {"dia": 30, "faturamento": 5100},
    {"dia": 31, "faturamento": 5100},
]


//Função que retorna o menor faturamento
let menorValor = dadosJSON[0].faturamento;
for (let i = 0; i < dadosJSON.length; i++) {
    if (dadosJSON[i].faturamento < menorValor) {
        menorValor = dadosJSON[i].faturamento;
    }
}
console.log("O menor faturamento é: " + menorValor);


//Função que retorna o maior faturamento
let maiorValor = dadosJSON[0].faturamento;
for (let i = 0; i < dadosJSON.length; i++) {
    if (dadosJSON[i].faturamento > maiorValor) {
        maiorValor = dadosJSON[i].faturamento;
    }
}
console.log("O maior faturamento é: " + maiorValor);


//Calcula média de faturamento
let media = 0;
for (let i = 0; i < dadosJSON.length; i++) {
    media += dadosJSON[i].faturamento;
}
media = media / dadosJSON.length;
console.log("A média de faturamento é: " + media);


//Calcula a quantidade de dias em que o faturamento é acima da média
let qtdDiasAcimaMedia = 0;
for (let i = 0; i < dadosJSON.length; i++) {
    if (dadosJSON[i].faturamento > media) {
        qtdDiasAcimaMedia++;
    }
}
console.log("A quantidade de dias em que o faturamento é acima da média é: " + qtdDiasAcimaMedia);