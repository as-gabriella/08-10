let idade = 20
if (idade >= 18) {
    console.log("Você tem idade para dirigir")
} else {
console.log ("Você não tem idade para dirigir") 
}

let Idade = 20
let temCarteira = true

if (Idade >= 18 && temCarteira === true) {
console.log("Você tem idade para dirigir e tem carteira.")
} else if (idade >= 18) {
console.log("Você até tem idade para dirigir, mas não tem carteira. Chame Uber.")
} 

let jogo = "Red Dead Redemption II"

switch (jogo) {
case "Red Dead Redemption II":
    console.log ("Jogo do velho oeste.") 
break

case "Skyrim":
    console.log ("Melhor jogo ja feito pela humanidade.")
break

case "Dark Souls": 
    console.log ("Meu Deus eu só morro nessa joça!")
break

default:
    console.log ("Não conheço esse jogo.")
}