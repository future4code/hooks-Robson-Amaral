//==========EXERCÍCIO 1==========

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array) //Será impresso o item do objeto com seu respectivo index e o array de objetos dentro de todos eles.
  })

//==========EXERCÍCIO 2==========

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) //Será impresso o nome de cada usuário do objeto "usuarios" na posição "nome".
  
  //==========EXERCÍCIO 3==========

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) //Será retornado um novo array de apelidos diferentes de "Chijo" com "Laura" e "Mandi"

//==========EXERCÍCIO 4==========

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const nomesDogs = pets.map((dog) => {
   return dog.nome
})

const dogsSalsicha = pets.filter((dog) => {
   return dog.raca === 'Salsicha'
})

const dogsPoodle = pets.filter((dog) => {
   return dog.raca === 'Poodle'
})

const mensagemPoodle = dogsPoodle.map((dog) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}`
})

console.log(nomesDogs)
console.log(dogsSalsicha)
console.log(mensagemPoodle)

//==========EXERCÍCIO 5==========

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const nomeProdutos = produtos.map((produto) => {
   return produto.nome
})

const produtoDesconto = produtos.map((produto) => {
   return { nome: produto.nome, preco: ((produto.preco * 0.95).toFixed(2)) }
})

const produtosBebidas = produtos.filter((produto) => {
   return produto.categoria === 'Bebidas'
})

const nomeYpe = produtos.filter((produto) => {
   return produto.nome.includes("Ypê")
})

const fraseProdutosYpe = nomeYpe.map((produto) => {
   return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(nomeProdutos)
console.log(produtoDesconto)
console.log(produtosBebidas)
console.log(nomeYpe)
console.log(fraseProdutosYpe)

//==========DESAFIO 1==========

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]

//A)==============================

const nomePokemons = pokemons.map((poke) => {
   return poke.nome;
 })

const nomesOrdemAlfabetica = nomePokemons.sort((a, b) => a.localeCompare(b))

//B)==============================

const tipos = pokemons.map((poke) => {
   return poke.tipo;
 })

const tipoSemRepeticao = tipos.filter((tipo, index, array) => {
   return array.indexOf(tipo) === index;
})
  
console.log(nomesOrdemAlfabetica)
console.log(tipoSemRepeticao)