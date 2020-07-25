let nome1 = (prompt("Nome da primeira pessoa."))
let nome2 = (prompt("Nome da segunda pessoa."))
let idade1 = Number(prompt("Idade da primeira pessoa."))
let idade2 = Number(prompt("Idade da segunda pessoa."))
let cor1 = (prompt("Cor favorito da primeira pessoa."))
let cor2 = (prompt("Cor favorito da segunda pessoa."))

console.log(`Registros de ${nome1} e ${nome2}.`)
console.log(`Idade de ${nome1}: ${idade1} anos.`)
console.log(`Idade de ${nome2}: ${idade2} anos.`)
console.log(`Cor favorito de ${nome1}: ${cor1}.`)
console.log(`Cor favorito de ${nome2}: ${cor2}.`);

let maior = (`${nome1} é maior que ${nome2}, é isso verdade?`)
let igual = (`${nome1} e ${nome2} tem a mesma idade, é isso verdade?`)
let menor = (`${nome2} é maior que ${nome1}, é isso verdade?`)

if (idade1 > idade2) {
    console.log(`${nome1} é maior que ${nome2}`)
    prompt(maior)
}

if (idade1 == idade2) {
    console.log(`${nome1} e ${nome2} tem a mesma idade.`)
    prompt(igual)
}

else if (idade1 < idade2) {
    console.log(`${nome2} é maior que ${nome1}`)
    prompt(menor)
}



