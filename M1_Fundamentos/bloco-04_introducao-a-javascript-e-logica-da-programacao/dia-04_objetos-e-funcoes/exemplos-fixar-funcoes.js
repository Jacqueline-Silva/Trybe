// PARTE 3 - FUNÇÕES

// EXEMPLO 1 


// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function bomDiaTryber(nome) {
  console.log('Bom dia, ' + nome);
}

bomDiaTryber('João'); // Bom dia, João
bomDiaTryber('Julia'); // Bom dia, Julia
bomDiaTryber('Marcelo'); // Bom dia, Marcelo

// EXEMPLO 2

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais

// EXEMPLO 3 


function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(5, 2)); // 7