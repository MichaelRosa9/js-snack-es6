/* Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */

const animals = [
  { nome: 'leone', 
    famiglia: 'felidi', 
    classe: 'mammiferi' 
  },
	{ nome: 'cane',
    famiglia: 'canidi', 
    classe: 'mammiferi'
  },
	{ nome: 'gallina', 
    famiglia: 'fasianidi', 
    classe: 'uccelli'
  },
];

$(() => {

  const mammiferi = animals.filter((animal) => animal.classe ==='mammiferi');
  console.log(mammiferi);
});