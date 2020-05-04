"use strict";
const Account = {
    accountNUmber: null,
    balance: 0.0,
    accountType: null,
    toString: function () {
                return `{ AccountNumber: ${this.accountNUmber}, balance: ${this.balance}, AccountType: ${this.accountType} }`;
    }
}
const savingsAccount = Object.create(Account);
const checkingAccount = Object.create(Account);

//Saving Account
savingsAccount.accountNUmber = '10001';
savingsAccount.balance = 125000.00;
savingsAccount.accountType = 'Savings';

//Checking Account
checkingAccount.accountNUmber = '10002';
checkingAccount.balance = 75090.50;
checkingAccount.accountType = 'Checking';
//method interest saving account
savingsAccount.addInterest = function (interestRate) {
    this.balance = this.balance + this.balance * interestRate * 0.01;
}
//method deduct maintenance for checking account
checkingAccount.deductMaintenanceFee = function (maintenanceFeeRate) {
    this.balance = this.balance - this.balance * maintenanceFeeRate * 0.01;
}

console.log(savingsAccount.toString());
console.log(checkingAccount.toString());
savingsAccount.addInterest(1.5);
checkingAccount.deductMaintenanceFee(10);
console.log(savingsAccount.toString());
console.log(checkingAccount.toString());
