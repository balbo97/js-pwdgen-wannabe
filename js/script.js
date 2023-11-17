// NOME 
let nome = prompt("Inserisci il tuo nome");
console.log(nome);

//COGNOME 
let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

//COLORE PREFERITO
let colore_preferito = prompt("Inserisci il tuo colore preferito");
console.log(colore_preferito);



let insicurissimo = `${nome}${cognome}${colore_preferito}23`

document.getElementById('title').innerHTML = insicurissimo