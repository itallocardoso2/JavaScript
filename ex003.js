<!DOCTYPE html>
<html lang="pt br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elaborar um programa para uma loja, o qual leia o preço de um produto e
        informe as opções de pagamento da loja. Calcule e informe o valor para
        pagamento à vista com 10% de desconto e o valor em 3x</title>

        <script>
var preco = Number(prompt("Preço R$:"));
var precoVista = preco - preco * 0.10;
var precoParcela = preco / 3;
alert("Preço R$: " + preco.toFixed(2) + "\nÀ vista R$: " + precoVista.toFixed(2) + "\nOu 3x de R$: " + precoParcela.toFixed(2))
        </script>
</head>
<body>
    
</body>
</html>
