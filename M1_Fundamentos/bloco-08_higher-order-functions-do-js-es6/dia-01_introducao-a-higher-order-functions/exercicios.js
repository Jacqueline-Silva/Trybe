// EXERCÍCIO 1 =====================================================

const emails = (name) => {
  const email = name.replace(' ', '').toLowerCase()
  return { name , Email: `${email}@trybe.com`}
}

const newEmployees = (call) => {

  const employees = {
  id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
  id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
  id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(emails));


// EXERCÍCIO 2 =====================================================

const random = () => {
  let aleatorio = Math.floor(Math.random() * (6 - 1) + 1);
  return aleatorio;
}

const loteria = (aleatorio, chute) => {
  console.log (`Nº aleatório: ${aleatorio}, Seu nº: ${chute}`)
  return aleatorio === chute ? 'Parabéns você ganhou!' : 'Tente novamente'
}

console.log(loteria(random(), 5));


// EXERCÍCIO 3 ====================================================

const RIGHT_ANSWERS =    ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (rightA, studentA) => {
  if (rightA === studentA) {
    return 1
  }
  if (studentA === 'N.A') {
    return 0
  }
  return -0.5
}

const comparaRespostas = (rightAnswers, studentAnswers, verifyAndSum) => {
  let count = 0;
  
  let verify = verifyAndSum(rightAnswers.forEach((e1) => [e1]), studentAnswers.forEach((e2) => [e2]))
    count += verify


  return count
};

console.log(comparaRespostas(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));