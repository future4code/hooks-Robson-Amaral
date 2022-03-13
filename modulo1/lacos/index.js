//==========EXERCÍCIO 1==========

let valor = 0
for(let i = 0; i < 5; i++) { //O código fará o loop até a variável i ser 5 é ai que ela sai do laço e imprime o valor
  valor += i
}
console.log(valor) //Será impresso 10



//==========EXERCÍCIO 2==========

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero) //a) Será impresso 19 21 23 25 27 30
	}
}

//==========EXERCÍCIO 3==========

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
