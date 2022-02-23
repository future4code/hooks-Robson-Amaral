//==========EXERCÍCIO 1==========//

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //4
console.log(filme.transmissoesHoje[2]) //Globo 14h

//==========EXERCÍCIO 2==========//

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // Juca 3 SRD
console.log(gato) //Juba 3 SRD
console.log(tartaruga) //Jubo 3 SRD

//Os 3 pontos significam o espalhamento que consiste em copiar todo um objeto para um novo

//==========EXERCÍCIO 3==========//

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //
console.log(minhaFuncao(pessoa, "altura"))

//==========EXERCÍCIO 4==========//

const pessoa = {
    nome: "Amanda",
    apelido: ["Amandinha", "Mandinha", "Mandi"]
}

function apelidosPessoa(objeto) {
    console.log(`"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}"`)
}

apelidosPessoa(pessoa)

const novaPessoa = {
    ...pessoa,
    apelido: ["Amandi", "Manda", "Mand"]
}

apelidosPessoa(novaPessoa)

//==========EXERCÍCIO 5==========//

const pessoa1 = {
    nome: "Bruno",
    idade: 23,
    profissão: "Instrutor"
}

const pessoa2 = {
    nome: "Marcelo",
    idade: 25,
    profissão: "Estudante"
}

function pessoas(pessoa) {
   const array = [pessoa]
   return array
}

pessoas(pessoa1)
pessoas(pessoa2)

//==========EXERCÍCIO 6==========//