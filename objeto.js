/* --- Objetos - Propriedades --- */

var aluno = {
    nome: "João",
    notas: [9.0, 7.0]
}

// Para inserir nova propriedade
aluno["sobrenome"] = "Oliveira"

// Outra forma de inserir propriedade
var novaProp = "matrícula"
aluno[novaProp] = "12.345"

// Resultado no console
console.log(aluno)





/* --- Objetos - Métodos --- -> Função dentro de um objeto */

function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Alex",
    notas: [9.0, 7.0],

    media: calcMedia
}

var aluno1 = {
    nome: "Pedro",
    notas: [9.5, 6],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())





