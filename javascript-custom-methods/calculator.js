/* exported calculator */
var calculator = {
  add: function (x, y) {
    var z = x + y;
    return z;
  },
  subtract: function (x, y) {
    var z = x - y;
    return z;
  },
  multiply: function (x, y) {
    var z = x * y;
    return z;
  },
  divide: function (x, y) {
    var z = x / y;
    return z;
  },
  square: function (x) {
    var z = x * x;
    return z;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum / numbers.length;
  }
};
