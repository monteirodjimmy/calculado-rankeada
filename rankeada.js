let vitorias = 125;
let derrotas = 2;

function calular(vitorias,derrotas){
    return vitorias - derrotas
}

if (vitorias<=10){
    nivel = "Ferro"
} else if (vitorias>=11 && vitorias<=20){
    nivel = "Bronze"
}else if(vitorias>=21 && vitorias<=50){
    nivel = "Prata"
}else if (vitorias>=51 && vitorias<=80) {
    nivel = "Ouro"
}else if (vitorias>=81 && vitorias<=90){
    nivel = "Diamante"
}else if (vitorias>=91 && vitorias<=100){
    nivel = "Lendário"
}else{
    nivel = "Imortal"
}

saldo = calular(vitorias, derrotas)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}.`);
