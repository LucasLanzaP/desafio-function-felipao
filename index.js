

function winningBalance(vitorias, derrotas){
    return vitorias - derrotas
}

let level = winningBalance(111,5)

if (level < 10){
    playerLevel = "Ferro"
} else if (level < 21){
    playerLevel = "Bronze"
} else if (level < 51){
    playerLevel = "Prata"
} else if (level < 81){
    playerLevel = "Ouro"
} else if (level < 91){
    playerLevel = "Diamante"
} else if (level < 100){
    playerLevel = "Lendário"
} else {
    playerLevel = "Imortal"
}


console.log("O herói tem saldo de " + level + " e está no nível " + playerLevel + ".") 


