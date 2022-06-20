//Json da questão
let faturamentoDistribuidora = [
    {"Estado": "SP", "faturamento": 67836.43},
    {"Estado": "RJ", "faturamento": 36678.66},
    {"Estado": "MG", "faturamento": 29229.88},
    {"Estado": "ES", "faturamento": 27165.48},
    {"Estado": "Outros", "faturamento": 19849.53}
]

//Calcula a média de faturamento
let soma = 0;
for (let i = 0; i < faturamentoDistribuidora.length; i++) {
    soma += faturamentoDistribuidora[i].faturamento;
}
let mediaFaturamento = soma / faturamentoDistribuidora.length;


//Calcula o percentual de faturamento de cada estado
function calculaPercentual(faturamento) {
    return (faturamento / mediaFaturamento) * 100;
}


//Exibe o percentual de faturamento de cada estado
for (let i = 0; i < faturamentoDistribuidora.length; i++) {
    console.log(faturamentoDistribuidora[i].Estado + ": " + calculaPercentual(faturamentoDistribuidora[i].faturamento).valueOf);
}