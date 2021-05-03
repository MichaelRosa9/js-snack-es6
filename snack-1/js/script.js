/* Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


const names = ['pippo', 'PLUTO', 'PaperIno'];
const up =

$(()=> {
  const capitalNames = names.map((name) =>{
    const newletter = [];
    let capital = name.substring(0,1).toUpperCase();
    let lowereCase = name.substring(1).toLowerCase();
    newletter.push(capital + lowereCase);
    return newletter;
    
  });
  console.log(capitalNames);
});