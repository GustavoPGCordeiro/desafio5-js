// Exercício 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de 
// sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura, peso){
    let IMC = peso/(altura**2);
    return `IMC: ${imc.toFixed(2)} kg/m²`;
}


// Exercício 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calculoFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;
    
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }

    return resultado;
}

// Exercício 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e 
// retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversorDolarParaReal(valorDolar){
    let real = 4.8;
    let conversor = valorDolar * real;
    return conversor;
}


// Exercício 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.
function mostrarAreaEPerimetro(altura, largura){
    let calculoArea = altura * largura;
    let calculoPerimetro =(2*altura) + (2*largura);
    let exibirNaTela = document.querySelector('h2');
    exibirNaTela.innerHTML = `Área: ${calculoArea} | Perímetro: ${calculoPerimetro}`;
}



// Exercício 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function mostrarAreaDaSala(raio){
    let pi = 3.14;
    let areaDoCirculo = pi * raio**2;
    let exibirNaTela2 = document.querySelector('h2');
    exibirNaTela2.innerHTML = `Área da sala = ${areaDoCirculo}`;
}


// Exercício 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(x) {
    for (let i = 1; i <= 10; i++) {
      let multiplicação = x * i;
      console.log(`${x} * ${i} = ${resultado}`);
    }
  }
  
  