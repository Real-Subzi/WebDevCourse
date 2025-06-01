// import { addAccount, getAccounts, deposit, withdraw } from "./repo/bank.js";
import * as repo from "./repo/bank.js";

const newAccount = {
    accountNo: 888,
    balance: 0,
    type: 'current'
}

repo.addAccount(newAccount);

console.log(repo.getAccounts());

repo.deposit(888, -1000);
console.log(repo.getAccounts());

repo.withdraw(888, 500);
console.log(repo.getAccounts());

repo.deleteAccount(888);
console.log(repo.getAccounts());

