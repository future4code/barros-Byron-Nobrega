function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}


// como a função recebe uma entrada que um array e temos um for com indexOf temos n*n de complexidade e em big-O temos O(n²)