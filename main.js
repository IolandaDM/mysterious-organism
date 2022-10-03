// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};
/*console.log(returnRandBase())*/
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
/*console.log(mockUpStrand())*/

function pAequorFactory(organismNum, pAequorDna) {
  return {
    specimenNum: organismNum,
    dna: pAequorDna,
    mutate() {
      let mutationIndex = Math.floor(Math.random() * this.dna.length);
      let mutationBase = this.dna[mutationIndex];
      let newBase = returnRandBase();

      while (mutationBase === newBase) {
        newBase = returnRandBase();
      }
      this.dna.splice(mutationIndex, 1, newBase);
      return this.dna;
    },
    compareDna(pAequor) {
      let identicalBases = 0;
      let totalBases = 15;
      let firstDna = this.dna;
      let secondDna = pAequor;
      for (let i = 0; i <= firstDna.length - 1; i++) {
        for (let j = 0; j <= secondDna.length - 1; j++) {
          if (i === j && firstDna[i] === secondDna[j]) {
            identicalBases += 1;
          }
        }
      }
      let percentIdentDna = ((identicalBases / totalBases) * 100).toFixed(2);
      console.log(`The two specimen have ${percentIdentDna} % DNA in common`);
    },
    willLikelySurvive() {
      let numOfCs = 0;
      let numOfGs = 0;
      for (let i = 0; i <= this.dna.length - 1; i++) {
        if (this.dna[i] === "C") {
          numOfCs += 1;
        }
        if (this.dna[i] === "G") {
          numOfGs += 1;
        }
      }
      return (numOfCs / 15) * 100 > 60 || (numOfGs / 15) * 100 > 60;
    },
    complementStrand() {
      let compStrand = [];
      for (let i = 0; i <= this.dna.length - 1; i++) {
        switch (this.dna[i]) {
          case "A":
            compStrand.push("T");
            break;
          case "T":
            compStrand.push("A");
            break;
          case "C":
            compStrand.push("G");
            break;
          case "G":
            compStrand.push("C");
            break;
        }
      }
      return compStrand;
    },
  };
}

function pAequorToSurvive() {
  let surviveColection = [];
  for (let i = 0; surviveColection.length <= 30; i++) {
    let newDna = [];
    for (let j = 0; j < 15; j++) {
      newDna.push(returnRandBase());
    }
    let numOfCs = 0;
    let numOfGs = 0;
    for (let k = 0; k <= newDna.length - 1; k++) {
      if (newDna[k] === "C") {
        numOfCs += 1;
      }
      if (newDna[k] === "G") {
        numOfGs += 1;
      }
    }
    if (numOfCs > 9 || numOfGs > 9) {
      surviveColection.push(newDna);
    }
  }
  return surviveColection;
}
let pAequorDna1 = [
  "G",
  "T",
  "A",
  "C",
  "A",
  "A",
  "C",
  "C",
  "C",
  "A",
  "G",
  "C",
  "A",
  "C",
  "T",
];
let pAequorDna2 = [
  "T",
  "C",
  "C",
  "C",
  "A",
  "T",
  "T",
  "C",
  "T",
  "A",
  "A",
  "G",
  "T",
  "A",
  "C",
];
let pAequorDna3 = [
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "C",
  "A",
  "G",
  "T",
  "A",
  "C",
]; /*
let x = pAequorFactory(1, pAequorDna1).mutate();
console.log(x);
console.log(pAequorDna1 === x);
let y = pAequorFactory(2, pAequorDna1).compareDna(pAequorDna2);
console.log(y)
console.log(pAequorFactory(3, pAequorDna3).willLikelySurvive());
console.log(pAequorToSurvive());*/
console.log(pAequorFactory(1, pAequorDna1).complementStrand());







