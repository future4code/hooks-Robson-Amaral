//==========EXERCÍCIO 1==========//

let array
console.log('a. ', array) //undefined

array = null
console.log('b. ', array) //null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i]) //3

array[i+1] = 19
console.log('e. ', array) //11

const valor = array[i+6]
console.log('f. ', valor) //9

//==========EXERCÍCIO 2==========//

const frase = prompt("Digite uma frase") //"Subi num ônibus em Marrocos"

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //SUBI NUM ÔNIBUS EM MIRROCOS 27

//==========EXERCÍCIO 3==========//

let nomeUsuario = prompt("Qual seu nome?")
let emailUsuario = prompt("Qual seu e-mail?")
console.log(`O e-mail ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

//==========EXERCÍCIO 4==========//

let comidas = ['Hámburguer', 'Pizza', 'Strogonoff', 'Churrasco', 'Cachorro-Quente']
console.log(comidas)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
const comidaPref = prompt("Qual sua comida preferida?")
comidas.splice(1, 1, comidaPref) //a partir do índice 1 remove 1 e adiciona o elemento novo
console.log(comidas)

//==========EXERCÍCIO 5==========//

let listaDeTarefas = []
listaDeTarefas [0] = prompt("Digite a primeira tarefa que você precisa realizar?")
listaDeTarefas [1] = prompt("Digite a segunda tarefa que você precisa realizar?")
listaDeTarefas [2] = prompt("Digite a terceira tarefa que você precisa realizar?")
console.log(listaDeTarefas)
tarefaRealizada = prompt("Digite o número da tarefa já realizada: 1, 2 ou 3")
listaDeTarefas = listaDeTarefas.splice([tarefaRealizada - 1])
console.log(listaDeTarefas)

//==========DESAFIO 1==========//

const frase = prompt("Digite uma frase:")
const array = [frase.split(' ')] //tranforma uma frase em um array
console.log(array)

//==========DESAFIO 2==========//

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.indexOf('Abacaxi', [0]),frutas.length) //encontra a posição de um elemento dentro de um array
