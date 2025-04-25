// let etudiant = [
//   {
//     nom: "tayeb",
//     notes: [10, 11, 10, 10],
//   },
//   {
//     nom: "khalid",
//     notes: [20, 20, 20, 20],
//   },
//   {
//     nom: "ali",
//     notes: [11, 11, 11, 11],
//   }
// ];

// let moyEtudia = [];
// for (let i = 0; i < etudiant.length; i++) {
//   let moy;
//   let som = 0;
//   for (let j = 0; j < etudiant[i].notes.length; j++) {
//     som += etudiant[i].notes[j];

//   }
//   moy = som / etudiant[i].notes.length;
//   moyEtudia.push([moy, etudiant[i].nom]);
// }

// let temp;
// let temp1;
// let temp2;
// for (let i = 0; i < moyEtudia.length; i++) {
//   for (let j = i + 1; j < moyEtudia.length; j++) {
//     if (moyEtudia[i][0] > moyEtudia[j][0]){

//       // temp = moyEtudia[i][0];
//       // temp1 = moyEtudia[i][1];
//       // moyEtudia[i][0] = moyEtudia[j][0];
//       // moyEtudia[i][1] = moyEtudia[j][1];
//       // moyEtudia[j][0] = temp;
//       // moyEtudia[j][1] = temp1;
//       temp2=moyEtudia[i];
//       moyEtudia[i]=moyEtudia[j];
//       moyEtudia[j]=temp2;
//     }
//   }
// }
// console.log(moyEtudia)

// ==========================================================
// ==========================================================
// ==========================================================
let numberR;

function start() {
  numberR = Math.floor(Math.random() * 100 + 1);
  return numberR;
}

start();
console.log(numberR);
let count = 0;
let number = document.getElementById("number");

function randoom() {
  num = number.value;
  // let numberR=Math.floor(Math.random() * 10 +1);
  // let number=6

  if (count < 7) {
    if (num < numberR) {
      console.log("lesthan");
    } else if (num > numberR) {
      console.log("morethan");
    } else {
      console.log("correct");
      console.log(`vous ${count}`);
      count = 0;
      start();
    }
  } else {
    console.log("vous depassez le nombre maximal du tentes");
    start();
    count = 0;
    return;
  }

  count++;
}

// randoom()
// console.log(n);
