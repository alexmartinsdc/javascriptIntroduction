/* --- Variáveis --- */

console.log("Exemplos de exercícios de Javascript")

var a

a = "HD"

a = "Placa de captura"

// Vai sobescrever o "HD"

console.log(a)

/* --- Tipos de dados --- */

//string
var b = "Primeira linha \nSegunda linha"
console.log(b)

//null
var c = null
console.log(c)

// undefined
var d
console.log(d)

// boolean
var e = true
var f = false
console.log(e)
console.log(f)

/* --- Operações aritméticas --- */

/*
+ adição
- subtração
* multiplicação
/ divisão
% módulo
++ incremento
-- decremento
*/

var g = 20
var h = 15

var i = g + h
var j = g - h
var k = g * h
var l = g / h
var m = g % h

console.log(i)
console.log(j)
console.log(k)
console.log(l)
console.log(m)

g++
h--

console.log(g)
console.log(h)

g += 5
h -= 5

console.log(g)
console.log(h)

/* --- Operadores de comparação --- */

/*
== igual a
=== valor igual e igual a
!= não é igual
!== não igual e valor não igual
> maior que
< menor que
>= maior que ou igual a
<= menor ou igual a
*/


var i = 2
var j = 3
var k = "2"

console.log(i == j)
console.log(k == i)
console.log(k === i)
console.log(i != j)
console.log(k != i)
console.log(k !== i)

/* --- Operadores lógicos --- */

/*
&& e
|| ou
// negativo
*/

var idade = 25

var maior20 = idade >= 20
var menor30 = idade <= 30

var entre = maior20 && menor30

console.log("Idade ", idade)
console.log("maior que 20 ", maior20)
console.log("menor que 30", menor30)
console.log("entre 20 e 30 ", entre)
/*

-----------------------------------------

*/
var idade = 66

var maior65 = idade >= 65
var menor10 = idade <= 10

var gratuidade = maior65 || menor10

console.log("Idade ", idade)
console.log("maior que 65 ", maior65)
console.log("menor que 10", menor10)
console.log("Tem direito a gratuidade?  ", gratuidade)
/*

-----------------------------------------

*/
var idade = 30

var maior20 = idade >= 20
var menor20 = idade < 20

console.log("maior que 20 ", maior20)
console.log("menor que 20 ", menor20)

console.log(!true)

/* --- Transformar string em número --- */

var a = "3.5"
var b = "6"

var c = a + b

console.log(c)

var c = parseInt(a) + parseInt(b)

console.log(c)
/*

-----------------------------------------

*/
var c = parseFloat(a) + parseFloat(b)

console.log(c)

/* --- Prompt e Alert --- */

/*var numero = parseFloat(prompt("Digite um número"))

var dobro = numero * 2

alert("O dobro de " + numero + " é " + dobro)*/

/* --- Condicionais - IF --- */

var idade = 50

if(idade >= 35) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
}
else if(idade >= 18) {
    console.log("Pode")
    console.log("Mostre a identidade")
}
else {
    console.log("Não pode")
}

if(idade >= 18 && idade <= 70) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
}
else {
    console.log("Não pode")
}

if(idade < 18 || idade > 70) {
    console.log("Pode")
    console.log("Qual o seu pedido?")
}
else {
    console.log("Não pode")
}

/* --- Operador ternário --- */

var idade = 18

idade >= 18 ? console.log("Pode") : console.log("Não pode")

// OU

var pode = idade >= 18 ? true : false

console.log(pode)

/* --- Switch --- */

var nota1 = 7.0
var nota2 = 2.0

var media = (nota1 + nota2) / 2

var conceito = ""

if (media >= 7) {
    console.log("Sua média foi " + media)
    conceito = "Ótimo"
}

else if (media >= 5) {
    console.log("Sua média foi " + media)
    conceito = "Bom"
}
else {
    console.log("Sua média foi " + media)
    conceito = "Ruim"
}

console.log(conceito)

switch(conceito) {

    case "Ótimo":
        console.log("Parabéns! Você é um ótimo aluno.")
        break

    case "Bom":
        console.log("Você precisa estudar mais.")
        break

    case "Ruim":
        console.log("Você está reprovado.")
        break

    default:
        console.log("Houve algum erro.")
        break
}

/* --- Repetição (Loop) - FOR e WHILE --- */


// for
var numero = 5

for (var i = 0; i < numero; i++) {
    console.log("Executando for " + i)
}

console.log("Acabou")

// while
var numero = 5

while (numero < 10) {
    console.log("Número " + numero)
    numero++
}

console.log("Acabou")

// Outro exemplo de while com número randô
var numero = Math.random() * 100

while (numero < 90) {
    console.log(parseInt(numero))
    numero = Math.random() * 100
}

console.log(parseInt(numero))
console.log("Acabou")

/* --- Arrays --- */

var alunos = new Array("Alex", "Igor", "Pedro", "Ana")

console.log(alunos)
console.log(alunos[2])
console.log(alunos.length)

// Outra maneira de criar um Array

var alunos = ["Alex", "Igor", "Pedro", "Ana"]

console.log(alunos)
console.log(alunos[3])
console.log(alunos.length)

// length é o tamanho do Array

var alunos = ["Alex", "Igor", "Pedro", "Ana", "Maria", "Joana"]

for (var i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
}

// Outra maneira

var alunos = ["Alex", "Igor", "Pedro", "Ana", "Maria", "Joana"]
// index
for (var i in alunos) {
    console.log(alunos[i])
}

var alunos = ["Alex", "Igor", "Pedro", "Ana", "Maria", "Joana"]
// valor
for (var aluno of alunos) {
    console.log(aluno)
}