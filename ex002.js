<!DOCTYPE html>
<html lang="pt br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elaborar um programa para uma pizzaria, o qual leia o valor total de
        uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
        pago por cliente.
        </title>

<script>


var valorConta = Number(prompt("Valor da Conta:"));
var numClientes = Number(prompt("Número de Clientes:"))
var valorCliente = valorConta / numClientes;
alert("Valor da Conta R$: " + valorConta.toFixed(2) + "\nNúmero de Clientes: " + numClientes +"\nValor por cliente R$: " + valorCliente.toFixed(2))



</script>

</head>
<body>
    
</body>
</html>
