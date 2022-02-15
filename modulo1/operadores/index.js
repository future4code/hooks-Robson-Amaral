//==========EXERCÍCIO 1==========//

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) //O resultado de a. será false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //O resultado de b. será false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //O resultado de c. será true

console.log("d. ", typeof resultado) //O resultado de d. será boolean

//==========EXERCÍCIO 2==========//

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) //Será impresso a concatenação dos números digitados em primeiroNumero e segundoNumero

//==========EXERCÍCIO 3==========//

let primeiroNumero = prompt("Digite um numero!") //A sugestão seria a inserção de Number antes de prompt com a adição dos parênteses 
let segundoNumero = prompt("Digite outro numero!") //Aqui também conforme a sugestão acima

const soma = primeiroNumero + segundoNumero

console.log(soma)

//==========EXERCÍCIO 4==========//

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))
let maior = idade >= idadeAmigo
let diferIdade = idade - idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo(a)?", maior)
console.log("A diferença de idade entre vocês é de", + diferIdade + " anos")

//==========EXERCÍCIO 5==========//

let numero = Number(prompt("Digite um número par:"))
let restoDiv = numero % 2
console.log(restoDiv)

//Se o número for par o resto da divisão será 0 
//Se o número for ímpar o resto da divisão será 1

//==========EXERCÍCIO 6==========//

let idade = Number(prompt("Qual sua idade em anos?"))
let idadeMeses = idade * 12
let idadeDias = idade * 365
let idadeHoras = idadeDias * idade 
console.log("Sua idade em Meses", idadeMeses)
console.log("Sua idade em Dias", idadeDias)
console.log("Sua idade em Horas", idadeHoras)

//==========EXERCÍCIO 7==========//

let numero1 = Number(prompt("Digite um número?"))
let numero2 = Number(prompt("Digite outro número?"))
let primeiroMaior = numero1 > numero2
let igualSegundo = numero1 === numero2
let primeiroDiv = 0 === (numero1 % numero2) 
let segundoDiv = 0 === (numero2 % numero1)
console.log("O primeiro número é maior que o segundo?", primeiroMaior)
console.log("O primeiro número é igual ao segundo?", igualSegundo)
console.log("O primeiro número é divísivel pelo segundo?", primeiroDiv)
console.log("O segundo número é divisível pelo primeiro?", segundoDiv)

//==========DESAFIO 1==========//

//A----------

const temperaturaF = 77 
const kelvin = (temperaturaF - 32) * (5/9) + 273.15 //converte fahrenheit em kelvin

console.log(`A temperatura de ${temperaturaF}°F em Kelvin é ${kelvin}K`)

//B----------

const temperaturaC = 80
const fahrenheit = (temperaturaC) *(9/5) + 32 //converte graus celsius em fahrenheit

console.log(`A temperatura de ${temperaturaC}°C em Fahrenheit é ${fahrenheit}°F`)

//C----------

const temperaturaC = 30
const fahrenheit = (temperaturaC) *(9/5) + 32 //converte graus celsius em fahrenheit
const kelvin = temperaturaC + 273 //converte graus celsius em kelvin

console.log(`A temperatura de ${temperaturaC}°C em Fahrenheit é ${fahrenheit}°F e em Kelvin é ${kelvin}K`)

//==========DESAFIO 2==========//

//A----------

const quilowattGasto = 280
const precoQuilowatt = 0.05
const valorAPagar = 280 * 0.05 

console.log(`O consumo de Quillowatt-hora do mês foi ${quilowattGasto} e o valor a ser pago será R$${valorAPagar}.`)

//B----------

const quilowattGasto = 280
const precoQuilowatt = 0.05
const valorConta = 280 * 0.05
const desconto = (valorConta * 15) / 100
const valorAPagar = valorConta - desconto
console.log(`O consumo de Quillowatt-hora do mês foi ${quilowattGasto} com o deconto de 15% o valor a ser pago será R$${valorAPagar}.`)


//==========DESAFIO 3==========//

//A----------

const libra = 20
const kilo = libra / 2.205 //converte libra para kilo

console.log(`20lb equivalem a ${kilo}kg`)

//B----------

const onca = 10.5
const kilo = onca / 35.274 //converte onça para kilo

console.log(`10.5oz equivalem a ${kilo}kg`)

//C----------

const milha = 100
const metro = milha * 1609 //converte milha para metro

console.log(`100mi equivalem a ${metro}m`)

//D----------

const pes = 50 
const metro = pes / 3.281 //converte pés para metro

console.log(`50ft equivalem a ${metro}m`)

//E----------

const galao = 103.56
const litro = galao * 3.785 //converte galão para litro

console.log(`103.56gal equivale a ${litro}l`)

//F----------

const xicara = 450 
const litro = (xicara * 6) / 25 //converte xícara para litro

console.log(`450xic equivalem a ${litro}l`)

//G----------

const libra = Number(prompt("Digite o valor de libras a ser convertido:"))
const kilo = libra / 2.205 //converte libra para kilo

console.log(`${libra}lb equivalem a ${kilo}kg`)