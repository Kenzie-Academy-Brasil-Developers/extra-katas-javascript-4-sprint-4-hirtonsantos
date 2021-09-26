function showResults (teste) {
    const div = document.createElement('div');
    div.innerHTML +=(teste);
    conteudo.appendChild(div);
}

function showResultsBonus(teste){
    const div = document.createElement('div');
    div.innerHTML += teste
    conteudoBonus.appendChild(div)
}

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function kata1() {
    // implemente aqui o código
    // 1. Escreva uma função que **retorna** um array com as cidades em 'gotCitiesCSV'. 
    // Lembre-se de também **adicionar os resultados à página**.
    let cities = gotCitiesCSV.split(",").join(", ")
    return  "Kata1: " + cities
}
showResults(kata1())

function kata2() {
    // 2. Escreva uma função que **retorna** um array das palavras na frase 
    // contida em 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
    let bestString = bestThing.split(" ").join(", ")
    return `Kata2: [${bestString}]`
}
showResults(kata2())

function kata3(){
    // 3. Escreva uma função que **retorna** uma string separada por ponto-e-vírgulas 
    // em vez das vírgulas de 'gotCitiesCSV'. 
    // Lembre-se de também **adicionar os resultados à página**.
    let cities = gotCitiesCSV.split(",").join("; ")
    return "Kata3: " + cities
}
showResults(kata3())

function kata4(){
    // 4. Escreva uma função que **retorne** uma string CSV (separada por vírgulas) 
    // de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
    let citiesArray = lotrCitiesArray.join(", ")
    return "Kata4: " + citiesArray
}
showResults(kata4())

function kata5(){
    // 5. Escreva uma função que **retorna** um array com as 5 primeiras cidades 
    //de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
    let resul = []
    for (let i = 0; i < 5; i++){
        resul.push('"' + lotrCitiesArray[i] + '"')
    }
    resul = resul.join(", ")
    return `Kata5: [${resul}]`
}
showResults(kata5())

function kata6(){
    // 6. Escreva uma função que **retorna** um array com as 5 últimas 
    // cidades de 'lotrCitiesArray'. 
    // Lembre-se de também **adicionar os resultados à página**.
    let resul = []
    for (let i = 1; i < 6; i++){
        let lastArray = lotrCitiesArray[lotrCitiesArray.length-i]
        resul.push('"' + lastArray + '"')
    }
    resul = resul.join(", ")
    return `Kata6: [${resul}]`
}
showResults(kata6())

function kata7(){
    // 7. Escreva uma função que **retorna** um array contendo da 3ª a 5ª cidades 
    // de 'lotrCitiesArray'. Lembre-se de também **adicionar os resultados à página**.
    let resul = []
    for (let i = 2; i < 5; i++){
        resul.push('"' + lotrCitiesArray[i] + '"')
    }   
    resul = resul.join(", ")
    return `Kata7: [${resul}]`
}
showResults(kata7())

function kata8(){
    // 8. Escreva uma função que use 'splice' para remover 'Rohan' de 'lotrCitiesArray' 
    // e **retorne** o novo 'lotrCitiesArray' modificado. 
    // Lembre-se de também **adicionar os resultados à página**.
    let array = lotrCitiesArray
    let newArray = lotrCitiesArray.splice(2, 1, "trumpet");
    return `Kata8 (Rohan foi trocado por trumpet :) : ${array.join(", ")}`;
}
showResults(kata8())

function kata9(){
    // 9. Escreva uma função que use 'splice' para remover todas as cidades 
    // depois de 'Dead Marshes' de 'lotrCitiesArray' e **retorne** o 
    // novo 'lotrCitiesArray' modificado.
    let array = lotrCitiesArray
    let newArray = array.splice(6, Number.MAX_VALUE)
    return `Kata9: ${array.join(", ")}`
}
showResults(kata9())

function kata10(){
    // 10. Escreva uma função que use 'splice' para adicionar 'Rohan' de volta 
    // ao 'lotrCitiesArray' logo depois de 'Gondor' e **retorne** o 
    // novo 'lotrCitiesArray' modificado.
    let array = lotrCitiesArray
    let newArray = lotrCitiesArray.splice(2, 0, "Rohan");    
    return `Kata10: ${array.join(", ")}`;
}
showResults(kata10())

function kata11(){
    // 11. Escreva uma função que use 'splice' para renomear 'Dead Marshes' 
    // para 'Deadest Marshes' em 'lotrCitiesArray' e **retorne** o novo 'lotrCitiesArray' 
    // modificado. Lembre-se de também **adicionar os resultados à página**.
    let array = lotrCitiesArray
    let newArray = lotrCitiesArray.splice(-1, 1, "Deadest Marshes");    
    return `Kata11: ${array.join(", ")}`;
}
showResults(kata11())

function kata12(){
    // 12. Escreva uma função que usa 'slice' para **retornar** uma string com os 
    // primeiros 14 caracteres de 'bestThing'.
    let string = bestThing.split("")
    let resul = []
    for (let i = 0; i < 15; i++){
        resul.push(string[i])
    }
    return `Kata12: ${resul.join("").toString()}`;
}
showResults(kata12())

function kata13(){
    // 13. Escreva uma função que usa 'slice' para **retornar** uma string 
    // com os 12 últimos caracteres de 'bestThing'.
    let string = bestThing.split("").splice(-14,14);
    return `Kata13: ${string.join("").toString()}`;
}
showResults(kata13())

function kata14(){
    // 14. Escreva uma função que usa 'slice' para **retornar** uma string 
    // com os caracteres entre as posições 23 e 38 de 'bestThing'.
    let string = bestThing.split("").splice(23,15);
    return `Kata14: ${string.join("").toString()}`;
}
showResults(kata14())

function kata15(){
    // 15. Escreva uma função que faz exatamente a **mesma coisa que a #13** 
    // mas use o método 'substring' em vez de 'slice'.
    let string = bestThing.substring(bestThing.length - 14)
    return `Kata15: ${string}`;
}
showResults(kata15())

function kata16(){
    // 16. Escreva uma função que faça exatamente a **mesma coisa que o #14** 
    // mas use o método 'substring' em vez de 'slice'.
    let string = bestThing.substring(23,38);
    return `Kata16: ${string}`;
}
showResults(kata16())

function kata17(){
    // 17. Escreva uma função que use 'pop' para remover a última cidade 
    // de 'lotrCitiesArray e **retorne** o novo array.
    let citiesArray = lotrCitiesArray
    removeLastcityArray = citiesArray.pop()
    return `Kata17: ${citiesArray.join(", ")}`;
}
showResults(kata17())

function kata18(){
    // 18. Escreva uma função que usa 'push' para adicionar de volta, no final do array, 
    // a cidade de 'lotrCitiesArray' que foi removida no #17 e **retorne** o novo array.
    let citiesArray = lotrCitiesArray//.push("Deadest Marshess")
    let addCityRemoved = citiesArray.push("Deadest Marshess")
    return `Kata18: ${citiesArray.join(", ")}`;
}
showResults(kata18())

function kata19(){
    // 19. Escreva uma função que usa 'shift' para remover a primeira cidade 
    // de 'lotrCitiesArray e **retorne** o novo array.
    let citiesArray = lotrCitiesArray
    let removeFirstCity = citiesArray.shift()
    return `Kata19: ${citiesArray.join(", ")}`;
}
showResults(kata19())

function kata20(){
    // 20. Escreva uma função que use 'unshift' para adicionar de 
    // volta, no começo do array, a cidade de 'lotrCitiesArray' que foi 
    // removida no #19 e **retorne** o novo array.
    let citiesArray = lotrCitiesArray
    let addCityRemoved = citiesArray.unshift("Mordor")
    return `Kata20: ${citiesArray.join(", ")}`;   
}
showResults(kata20())


// # Bônus Opcional (6 pts)


function kataBonus1(){
    // 1. Escreva uma função que transforme a variável 'bestThing' em um array, 
    // encontre e **retorne** o índice da palavra 'only' dentro dela.
    let string = bestThing.split(" ")
    let elemento = "only"
    let index = string.indexOf(elemento)
    return `Kata bonus 1 => O índice da palavra ${elemento} é ${index}!`
}
showResultsBonus(kataBonus1())

function kataBonus2(){
    // 2. Escreva uma função que encontre e **retorne** o índice da última palavra do 
    // array 'bestThing'. Lembre-se de também **adicionar os resultados à página**.
    let string = bestThing.split(" ")
    let lastIndex = string.length-1
    let lastArray = string[string.length-1]
    return `Kata bonus 2 => O índice da palavra ${lastArray} é ${lastIndex}!`
}
showResultsBonus(kataBonus2())

function kataBonus3(){
    // 3. Escreva uma função que encontre e **retorne** um array de 
    // todas as cidades do array 'gotCitiesCSV' que tiverem vogais 
    // duplicadas ('aa', 'ee', etc.).
    let array = gotCitiesCSV.split(",")
    let resul = ""
    for (let i = 0; i < array.length; i++){
        let string = array[i].toString()
        if (string.includes('aa') === true){
            resul+=string + ", "
        } else if (string.includes('ee') === true){
            resul+=string + ", "
        } else if (string.includes('ii') === true){
            resul+=string + ", "
        } else if (string.includes('oo') === true){
            resul+=string + ", "
        } else if (string.includes('uu') === true){
            resul+=string + ", "
        } 
    }
    return `Kata bonus 3 => ${resul.slice(0, -2)}`    
}
showResultsBonus(kataBonus3())

function kataBonus4(){
    // 4. Escreva uma função que encontre e **retorne** um array com todas as cidades 
    // do array 'lotrCitiesArray' que terminem em 'or'.
    let array = []
    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i].slice(-2) === 'or'){
            array.push(lotrCitiesArray[i])
        }
    }
    return `Kata bonus 4 => ${array.join(", ")}`   
}
showResultsBonus(kataBonus4())

function kataBonus5(){
    // 5. Escreva uma função que encontre e **retorne** um array com todas as 
    // palavras de 'bestThing' que começa com 'b'.
    let string = bestThing.split(" ")
    let array = []
    for (let i = 0; i < string.length; i++) {
        if (string[i].slice(0,1) === "b"){
            array.push(string[i])
        }
    }
    return `Kata bonus 5 => ${array.join(", ")}`   
}
showResultsBonus(kataBonus5())

function kataBonus6(){
    // 6. Escreva uma função que **retorne** 'true' ou 'false' se o 
    // array 'lotrCitiesArray' incluir 'Mirkwood'.
    return `Kata bonus 6 => A palavra 'Mirkwood' está inclusa no array "lotrCitiesArray"? ${lotrCitiesArray.includes("Mirkwood")}.`   
}
showResultsBonus(kataBonus6())

function kataBonus7(){
    // 7. Escreva uma função que **retorne** 'true' ou 'false' se o 
    // array 'lotrCitiesArray' incluir 'Hollywood'.

    return `Kata bonus 7 => A palavra 'Hollywood' está inclusa no array "lotrCitiesArray"? ${lotrCitiesArray.includes("Hollywood")}.`   
}
showResultsBonus(kataBonus7())

function kataBonus8(){
    // 8. Escreva uma função que **retorne** o índice da palavra 'Mirkwood' no 
    // array 'lotrCitiesArray'.
    let index = lotrCitiesArray.indexOf("Mirkwood")
    return `Kata bonus 8 => O índice da palavra ${"Mirkwood"} é ${index}!`
}
showResultsBonus(kataBonus8())

function kataBonus9(){
// 9. Escreva uma função que encontre e **retorne** a primeira cidade do 
// array 'lotrCitiesArray' que tiver mais de uma palavra.
    for (let i = 0; i < lotrCitiesArray.length; i++){
    if (lotrCitiesArray[i].indexOf(" ") !== -1) {
        return `Kata bonus 9 => A primeira cidade do array "lotrCitiesArray" que tem mais de uma palavra é: ${lotrCitiesArray[i]}!`
        }
    }
}
showResultsBonus(kataBonus9())

function kataBonus10(){
    // 10. Escreva uma função que inverta a ordem do array 'lotrCitiesArray' 
    //e **retorne** o novo array.
    let arrayReverse = lotrCitiesArray.reverse()
    return `Kata bonus 10 => [${arrayReverse.join(", ")}]`
}
showResultsBonus(kataBonus10())

function kataBonus11(){
    // 11. Escreva uma função que ordene o array 'lotrCitiesArray' alfabeticamente
    // e **retorne** o novo array.
    return `Kata bonus 11 => ${lotrCitiesArray.sort().join(", ")}`
}
showResultsBonus(kataBonus11())
