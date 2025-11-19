// IMC = peso / (altura x altura)
function meuEscopo() {

    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')


    function recebeEventoForm(evento) {

        evento.preventDefault();


        const peso = form.querySelector('.peso');
        const valorP = parseFloat(peso.value);



        const altura = form.querySelector('.altura');
        const valorA = parseFloat(altura.value)

        const imc = valorP / (valorA * valorA);

        const calculo = (imc.toFixed(2));


        let dizer;

        if (imc <= 18.5) {


            dizer = calculo + ` Abaixo do peso`;

        }
        else if (imc >= 18.5 && imc <= 25.9) {

            dizer = calculo + ` peso normal`;
        }
        else if (imc >= 25 && imc <= 29.9) {
            dizer = calculo + `sobrepeso`;

        } else if (imc >= 30 && imc <= 34.9) {
            dizer = calculo + `obesidade grau1`;

        } else if (imc >= 35 && imc <= 39.9) {

            dizer = calculo + ` obesidade grau2`;

        } else if (imc >= 40) {

            dizer = calculo + ` obesidade grau3`;

        } else {
            dizer = ' esta vazio digite um valor';
        }



        resultado.innerHTML = ` Seu imc ${dizer}`


    };

    form.addEventListener('submit', recebeEventoForm,)

}

meuEscopo();