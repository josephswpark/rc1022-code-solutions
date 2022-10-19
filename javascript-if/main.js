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
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
function isOldEnoughToDrink(person) {
  if (bart.age < 21) {
    return false;
  }
}

var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};

function isOldEnoughToDrive(person) {
  if (homer.age > 18) {
    return true;
  }
}

var isOldEnoughToDrinkAndDrive = false;

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
