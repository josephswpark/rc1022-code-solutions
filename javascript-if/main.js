/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return 'True';
  } else {
    return 'False';
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return 'True';
  } else {
    return 'False';
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return 'true';
  } else {
    return 'False';
  }
}

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
function isOldEnoughToDrink(person) {
  if (bart.age < 21) {
    return 'False';
  }
}

var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};

function isOldEnoughToDrive(person) {
  if (homer.age > 18) {
    return 'True';
  }
}

var isOldEnoughToDrinkAndDrive = 'False';

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } if (pH < 7 && pH > 0) {
    return 'acid';
  } if (pH > 7 && pH < 14) {
    return 'base';
  } if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everyone!';
  }
}
