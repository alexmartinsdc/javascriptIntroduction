/* --- Funções --- */

function media(n1, n2) {
    var media = (n1 + n2) / 2;
    
    return media
}

console.log(media(4, 7)) 
console.log(media(6, 9))

/* --- Funções parte 2 --- */

function saudacao() {

    return "Olá, Mundo!"

}

var s = saudacao()

console.log(s)

/* Outra maneira de criar uma função */

var media = function (n1, n2) {

    return (n1 + n2) / 2

}

console.log(media(5, 6))

// ou

var m = media(7, 8)
console.log(m)

// Arrow function

var media = (n1, n2) => {

    return (n1 + n2) / 2

}

console.log(media(5, 6))