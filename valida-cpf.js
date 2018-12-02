// let cpf = "30797774840"

function verificaPrimeiroDigito(cpf){
  let arrayNumeros = cpf.split("").map(function(index){
    return parseInt(index);
  })

  let multiplicador = 10;
  let numVerificador = arrayNumeros.slice(0,9).map(function(numero){
    let valorMultiplicado = numero * multiplicador;
    multiplicador -= 1;
    return valorMultiplicado;
  }).reduce(function(valorPrevio, elem){
    return valorPrevio + elem
  }, 0) * 10 % 11;

if (numVerificador === 10){
    numVerificador = 0;
  }

  return numVerificador === arrayNumeros[9];
}

function verificaSegundoDigito(cpf){
  let arrayNumeros = cpf.split("").map(function(index){
    return parseInt(index);
  })

  let multiplicador = 11;
  let numVerificador = arrayNumeros.slice(0,10).map(function(numero){
    let valorMultiplicado = numero * multiplicador;
    multiplicador -= 1;
    return valorMultiplicado;
  }).reduce(function(valorPrevio, elem){
    return valorPrevio + elem
  }, 0) * 10 % 11;

  if (numVerificador === 10){
    numVerificador = 0;
  }

  return numVerificador === arrayNumeros[10];
}

function verificaCPF(numCpf) {
  return verificaPrimeiroDigito(numCpf) && verificaSegundoDigito(numCpf)
}