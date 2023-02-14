var precoJantar = Number(prompt("Digite o valor do jantar: "));
var taxaGarcom = precoJantar * (10/100);
var precoTotal = precoJantar + taxaGarcom;
alert("Valor do Jantar R$: " + precoJantar.toFixed(2) + "\nTaxa do Garçom R$: " + taxaGarcom.toFixed(2) + "\nTotal a Pagar R$: " + precoTotal.toFixed(2));
