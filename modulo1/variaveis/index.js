//==========EXERCÍCIO 1==========//

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

//A primeira impressão será a variável let b com valor 10, depois será a impressão da váriavel let a com valor de 10 e a variável let b com a mudança do valor de 10 para 5

//==========EXERCÍCIO 2==========//

let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

//A variável let a terá o valor de 20 a váriável let b será undefined e a variável let c com o valor de 10

//==========EXERCÍCIO 3==========//

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

//Na variável let p uma melhor opção seria horasDia e na variável t valorDia

//==========EXERCÍCIO 4==========//

//PARTE 1

let nome
let idade
console.log(typeof idade, nome)

//A variável let nome e let idade terá seu tipo como resultado undefined, por não ter nenhum valor atribuído a ela

//PARTE2

let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
console.log(typeof nome)
console.log(typeof idade)

//A variável nome e idade agora tem o tipo string 

//PARTE 3

let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
console.log('Olá', nome, 'você tem', idade, 'anos.')

//==========EXERCÍCIO 5==========//

let pergunta1 = 'Você bebeu água hoje?'
let resposta1 = 'Sim'
let pergunta2 = 'Você já se exercitou hoje?'
let resposta2 = 'Não'
let pergunta3 = 'Você já estudou hoje?'
let resposta3 = 'Sim'
console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

//==========EXERCÍCIO 6==========//

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

let c = a

a = b
b = c

// Depois de trocados, teremos o seguinte resultado:

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//==========DESAFIO==========//

const num1 = Number(prompt("Digite um número:"))
const num2 = Number(prompt("Digite outro número:"))

const soma = num1 + num2
const multiplicacao = num1 * num2

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado ao segundo número resulta em:", multiplicacao)

