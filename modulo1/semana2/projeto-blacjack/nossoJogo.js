
 let compraCarta = () => {
    while(novaRodada() === true) { 
      let carta1Usuario = comprarCarta()
      let carta2Usuario = comprarCarta()
      let carta1Computador = comprarCarta()
      let carta2Computador = comprarCarta()
      let cartas = [carta1Usuario, carta2Usuario, carta1Computador, carta2Computador]
      return cartas
   }
}
// let carta1Usuario = () => {
//    while(novaRodada() === true) {
//       let carta1Usuario = comprarCarta()
//    break
//    }
//    return carta1Usuario

// const carta1Usuario = comprarCarta(); 
// const carta2Usuario = comprarCarta()
// const carta1Computador = comprarCarta()
// const carta2Computador = comprarCarta()

const imprimeBoasVindas = () => {
   return console.log("===============BOAS VINDAS AO JOGO BLACKJACK!===============")
}

const inicioJogo = (cartas) => {
   if (confirm("Você quer iniciar o jogo?")) {
     imprimeCartasUsuario(compraCarta)
     imprimeCartasComputador(carta1Computador[2], carta2Computador[3])
     imprimeResultadoFinal()
    return true
   }
 }


const imprimeCartasUsuario = (cartaUsuario1[0], carta2Usuario[1]) => {
   return console.log(`Usuário cartas: ${cartaUsuario1[0].texto} ${cartasUsuario[1].texto} - pontuação ${pontuacaoUsuario()}`)
}

const pontuacaoUsuario = () => {
   resultadoUsuario = compraCarta[0].valor + compraCarta[1].valor
   return resultadoUsuario
}

const imprimeCartasComputador = (carta1, carta2) => {
   return console.log(`Computador cartas: ${compraCarta.texto} ${carta2.texto} - pontuação  ${pontuacaoComputador()}`)
}

const pontuacaoComputador = () => {
   resultadoComputador = carta1Computador.valor + carta2Computador.valor
   return resultadoComputador
}

const imprimeResultadoFinal = () => {
   if (pontuacaoUsuario() > pontuacaoComputador()) {
      return console.log("Usuário Ganhou.")
   } else if (pontuacaoComputador() > pontuacaoUsuario()) {
      return console.log("Computador Ganhou.")
   } else {
      return console.log("Empate")
   }
}

const novaRodada = () => {
   if (confirm("Você quer iniciar uma nova rodada?'")) {
         imprimeCartasUsuario(carta1Usuario, carta2Usuario)
         imprimeCartasComputador(carta1Computador, carta2Computador)
         imprimeResultadoFinal()
      return true
   } else {
      return false
   }
}

const confirmacaoNovaRodada = (novaRodada) => {
   while(novaRodada() === true) {
      novaRodada()
   break
   }
   console.log("O Jogo Acabou.")
}

imprimeBoasVindas()
inicioJogo(compraCarta)
novaRodada()
confirmacaoNovaRodada(novaRodada)

