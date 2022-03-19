/*
function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [

    criarAluno("Alex", 9, 7),
    criarAluno("João", 6, 8),
    criarAluno("Alex", 8, 9)
]

var aluno = turma[0]

turma.forEach(function (e) {
    console.log(e)
    console.log(e.media())
}) */

function aluno(nome, n1, n2) {

    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    } 
}

var a = new aluno("Alex", 9, 8)
var b = new aluno("João", 6, 8)

console.log(a)
console.log(a.media())