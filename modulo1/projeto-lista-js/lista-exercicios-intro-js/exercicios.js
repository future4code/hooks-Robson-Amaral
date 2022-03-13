// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura:"))
  const largura = Number(prompt("Digite a largura:"))
  
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNasc = Number(prompt("Digite seu ano de nascimento:"))

  console.log(anoAtual - anoNasc)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const peso = Number(prompt("Digite seu peso:"))
  const altura = Number(prompt("Digite sua altura:"))
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita?")
  const cor2 = prompt("Qual a sua segunda cor favorita?")
  const cor3 = prompt("Qual sua última cor favorita?")
  let coresFavoritas = [cor1, cor2, cor3]
  
  console.log(coresFavoritas) 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array [0]
  array [0] = array [array.length - 1]
  array [array.length - 1] = primeiroElemento
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const emissaoIdentidade = Number(prompt("Qual o ano de emissão da sua carteira de Identidade?"))
  const idade = anoAtual - anoNascimento
  const tempoRG = anoAtual - emissaoIdentidade
  const $20Anos = idade <= 20 && tempoRG >= 5
  const $20_50Anos = idade > 21 && idade <= 50 && tempoRG >= 10
  const acima50Anos = idade > 50 && tempoRG >= 15
  
  console.log($20Anos || $20_50Anos || acima50Anos)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBissexto1 = ano % 400 === 0
  const anoBissexto2 = ano % 4 === 0 && ! (ano % 100 === 0) && ! anoBissexto1
  
  return anoBissexto1 || anoBissexto2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?") === "sim"
  const ensinoMedio = prompt("Você possui o ensino médio completo?") === "sim"
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"
  
  console.log(idade && ensinoMedio && disponibilidadeHorario )
}
