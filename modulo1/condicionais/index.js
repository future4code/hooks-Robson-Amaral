//==========EXERCÍCIO 1==========

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.") //b) Passa no teste números com resto 0 que são pares
} else {
  console.log("Não passou no teste.") //c) Não passa no teste números com resto 1 que são ímpares
}

//a) O código testa se o número digitado tem resto 0 se sim passa no teste, senão não passa.

//==========EXERCÍCIO 2==========

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) //b) O valor da fruta maçã é R$2,25
//c)Retornaria default preço 5

//a) O código serve para descobrir o preço da fruta digitada

//==========EXERCÍCIO 3==========

const numero = Number(prompt("Digite o primeiro número.")) //a) Pede para o usuário digitar um número

if(numero > 0) { 
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//==========EXERCÍCIO 4==========

const idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
  console.log("Você pode dirigir")
} else {
  console.log("Você não pode dirigir")
}

//==========EXERCÍCIO 5==========

const turno = prompt("Digite qual turno você estuda: M (matutino), V (vespertino) N (noturno)").toUpperCase()

if (turno === "M") {
  console.log("Bom Dia!")
} else if (turno === "V") {
  console.log("Boa Tarde!")
} else {
  console.log("Boa Noite!")
}

//==========EXERCÍCIO 6==========

const turno = prompt("Digite qual turno você estuda: M (matutino), V (vespertino) N (noturno)").toUpperCase()

switch (turno) {
  case "M":
    console.log("Bom Dia!")
    break
  case "V":
    console.log("Boa Tarde!")
    break
  case "N":
    console.log("Boa Noite!")
    break
}

//==========EXERCÍCIO 7==========

const filme = prompt("Qual filme você quer assistir?")

const filmes = [
  {nome: "Alice no País das Maravilhas", genero: "Fantasia", valorIngresso: 14},
  {nome: "Velozes e Furiosos", genero: "Ação", valorIngresso: 22},
  {nome: "Harry Potter", genero: "Fantasia", valorIngresso: 12}, 
  {nome: ""}
]