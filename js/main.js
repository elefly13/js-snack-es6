// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// const bici = [
//         {
//             nome : 'Bianchi',
//             peso : 3
//         },
//         {
//             nome : 'Trek',
//             peso : 2
//         },
//         {
//             nome : 'Scott',
//             peso : 1
//         }
//     ];
//     console.log(bici);


// let biciLeggera = bici[0];

//     for (let i = 0; i < bici.length; i++) {
//             const {peso} = bici[i];
//             if (peso < biciLeggera.peso) {
//                 biciLeggera = bici[i];
//             }
//         }
        
// console.log(biciLeggera);


// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

// biciLight = (array) => {
//     let biciLeggera = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const {peso} = array[i];
//         if (peso < biciLeggera.peso) {
//             biciLeggera = array[i];
//         }
//     }
//     return biciLeggera;
// }
// console.log(biciLight(bici));

// --------------------------------------------------------------------------------------------------------------------------
// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// let squadre = [
//     {
//         nome : 'Milan',
//         punti : 0,
//         falli : 0
//     },
//     {
//         nome : 'Juventus',
//         punti : 0,
//         falli : 0
//     },
//     {
//         nome : 'Fiorentina',
//         punti : 0,
//         falli : 0
//     },
//     {
//         nome : 'Inter',
//         punti : 0,
//         falli : 0
//     },
//     {
//         nome : 'Atalanta',
//         punti : 0,
//         falli : 0
//     },
// ];
// console.log(squadre);

// // Generare numeri random al posto degli 0 nelle proprietà:
// // Punti fatti e falli subiti.

// function rdnNumber (min, max) {
//     let rnd = Math.floor(Math.random() * (max - min)) + min;
//     return rnd;
// }

// for (let i = 0; i < squadre.length; i++) {
//     squadre[i].punti = rdnNumber(1, 10);
//     squadre[i].falli = rdnNumber(1, 10);

// }
// console.log(squadre);

// // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// let newArraySquadre =[];
// for (let i = 0; i < squadre.length; i++) {
//     const {nome, falli} = squadre[i];
//     // newArraySquadre.push(nome + ' ' + 'falli:' + falli);
//     newArraySquadre.push(`${nome} falli subiti: ${falli}`);
// }
// console.log(newArraySquadre);

// ----------------------------------------------------------------------------------
// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
const array = [1,2,3,4,5,6,7,8,9,10];
let a = rdnNumber(1, 10);
let b = rdnNumber(1, 10);

console.log(`${a}  ${b}`);
while (a >= b) {
    a = rdnNumber(1, 10);
    b = rdnNumber(1, 10);
}
console.log(`${a}  ${b}`);

const myFunction = (array, a, b) => {
    const newArray = array.filter((element) => {
        if ((element > a) && (element < b)) {
            return true;
        }
        return false;
    })
    return (newArray);
}

console.log(myFunction(array, a, b));




// funzione numeri random 
function rdnNumber (min, max) {
    let rnd = Math.floor(Math.random() * (max - min)) + min;
    return rnd;
}