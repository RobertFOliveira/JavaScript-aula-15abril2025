
let soma = 0
let menor = 1000
let maior = -1
let numeros = [1, 8, 9, 10]
for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
    if (maior < numeros[i]) {
        maior = numeros[i]
    }
    if (menor > numeros[i]) {
        menor = numeros[i]
    }

}

