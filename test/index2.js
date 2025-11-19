/*function teste(nome){
return `bom dia ${nome} `;

}

nome= prompt('insira o valor');
alert(teste(nome));*/

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}


function subtracao(x, y) {
    const resultado = x - y;
    return Math.abs(resultado);

}

const escolha = prompt('escolha a function 1 ou 2: ')

if (escolha == 1) {

    alert('você escolheu somar numeros')

    let valor1 = prompt('insira o primeiro valor: ')
    valor1 = Number(valor1)
    let valor2 = prompt('insira o primeiro valor: ')
    valor2 = Number(valor2)

    alert(soma(valor1, valor2))


} else {

     alert('você escolheu subitrair numeros')

    let valor1 = prompt('insira o primeiro valor: ')
    valor1 = Number(valor1)
    let valor2 = prompt('insira o primeiro valor: ')
    valor2 = Number(valor2)

    alert(subtracao(valor1, valor2))


}