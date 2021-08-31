// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
        {
            nome : 'Bianchi',
            peso : 3
        },
        {
            nome : 'Trek',
            peso : 2
        },
        {
            nome : 'Scott',
            peso : 1
        }
    ];
    console.log(bici);

    // destructuring
const [biciOne, biciTwo, biciThree] = bici;

let biciLeggera = bici[0];
() => {
    for (let i = 0; i < bici.length; i++) {
            if ( bici[i].peso < biciLeggera.peso) {
                biciLeggera = bici[i];
            }
        }
        return console.log(biciLeggera);
}


// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera





// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// let squadre = [
//     {
//         'nome' : 'Milan',
//         'punti fatti' : 0,
//         'falli subiti' : 0
//     },
//     {
//         'nome' : 'Juventus',
//         'punti fatti' : 0,
//         'falli subiti' : 0
//     },
//     {
//         'nome' : 'Fiorentina',
//         'punti fatti' : 0,
//         'falli subiti' : 0
//     },
//     {
//         'nome' : 'Inter',
//         'punti fatti' : 0,
//         'falli subiti' : 0
//     },
//     {
//         'nome' : 'Atalanta',
//         'punti fatti' : 0,
//         'falli subiti' : 0
//     },
// ];
// console.log(squadre);

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

// let randomPunti;
// let randomFalli;


// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.