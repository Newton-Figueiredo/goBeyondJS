var continuar = 'S';
var texto;

while(continuar === 'S'){
var nomeVendedor = prompt('digite o nome do vendedor');
var salarioVendedor = prompt('digite o salario do vendedor');
var vendasVendedor = prompt('digite o valor das vendas do vendedor');

texto = texto + (`o salario do vendedor ${nomeVendedor} foi de: ${  (Number.parseFloat(salarioVendedor)+ Number.parseFloat(vendasVendedor) *0.15).toFixed(2)} Reais \n `);
continuar = prompt('deseja continuar  ? S ou N ?');
}

console.log(texto.toString());

