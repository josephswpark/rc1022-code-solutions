/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposits = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(deposits);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdraw = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(withdraw);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
    if (Account.getBalance === 0) {
      return 0;
    }
  }
  return balance;
};
