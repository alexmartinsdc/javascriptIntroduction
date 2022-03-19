// Sistema de cáculo de média dos alunos

var nomes = ["Alex", "Maria", "Pedro"]
var n1 = [9.0, 7.5, 6.5]
var n2 = [7.5, 6.0, 9.5]

function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media) {
    if(media > 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var i in nomes) {
    var nota1 = n1[i]
    var nota2 = n2[i]

    var m = media(nota1, nota2)

    console.log(nomes[i] + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m))
}

