function getConjugateNumbers(arr) {
    let beadRep = arr.map(n => "o".repeat(n).split(""));
    //2d array of beads
    let maxLength = Math.max(...beadRep.map(row => row.length));
    beadRep = beadRep.map(row => row.concat(Array(maxLength - row.length).fill(" ")));
    let conjugateBeadRep = [];
    for (let i = 0; i < beadRep[0].length; i++) {
      let column = [];
      for (let j = 0; j < beadRep.length; j++) {
        column.push(beadRep[j][i]);
      }
      conjugateBeadRep.push(column.filter(char => char !== " "));
    }
    return conjugateBeadRep.map((array) => array.length)
}
