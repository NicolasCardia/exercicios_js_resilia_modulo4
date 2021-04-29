//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array

//map trabalha com "transformações de arrays" ou seja passa de uma coisa para outra retornando um novo arrayd
var numbers = [4, 9, 16, 25];
var raizNumeros = numbers.map((numero) => {
  return Math.sqrt(numero)

})

console.log(raizNumeros)

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];
var multiplicaNumbers = numbers.map((numeros) => {
  return numeros * 10
})
console.log(multiplicaNumbers)

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter

//filter um metodo que filtra arrays com a logica passado na arrow function
var ages = [32, 33, 16, 40];
var agesMore = ages.filter((idades) => {
  return idades >= 18
})
console.log(agesMore)


//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog',
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog',
  },

  {
    name: 'Red',
    age: 1,
    type: 'cat',
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog',
  },
];
var soCachorros = data.filter((cachorros) => {
  return cachorros.type == 'dog' 
})
.map((cachorrosNome) => {
  return cachorrosNome.name
})
console.log(soCachorros)

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

//Reduce reduz todos o conteudo do array (geralmente numeros) em um unico valor
//var somaIdade = data.reduce((acumulador,  idadeAtual) => {acumulador + idadeAtual.age },0)
var somaIdade = data.reduce((acumulador,  idadeAtual) => acumulador + idadeAtual.age ,0)
console.log(somaIdade)