const findMissingNumbers = (sequence, lastElement) => {
  let missingNumbers = [];

  let expectedNumber = 1;

  for (let i = 0; i < sequence.length; i++) {
    const currentNumber = sequence[i];

    while (currentNumber > expectedNumber) {
      missingNumbers.push(expectedNumber);
      expectedNumber++;
    }

    expectedNumber++;
  }

  if (sequence[sequence.length - 1] !== lastElement) {
    missingNumbers.push(lastElement);
  }

  return missingNumbers;
};

2. Залагльна складність  O(n)