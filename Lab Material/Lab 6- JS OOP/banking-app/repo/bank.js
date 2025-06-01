const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: "Saving",
    },
    {
        accountNo: 234,
        balance: 4000,
        type: "Current",
    },
    {
        accountNo: 345,
        balance: 35000,
        type: "Current",
    },
    {
        accountNo: 456,
        balance: 60000,
        type: "Saving",
    }
]

export function deposit(accountNo,amount){
    const account = accounts.find((account)=>account.accountNo===accountNo);
    account.balance+=amount;
}

export function withdraw(accountNo,amount){
    const account = accounts.find((account)=>account.accountNo===accountNo);
    account.balance-=amount;
}

export function add(account){
    accounts.push(account);
}

export function getAccount(accountNo){
    return accounts.find((account)=>account.accountNo===accountNo);
}

export function getAccounts(){
    return accounts;
}

export function deleteAccount(accountNo){
    const account = accounts.find((account)=>account.accountNo===accountNo);
    const index = accounts.indexOf(account);
    accounts.splice(index,1);
}

export function avgBalance(){
    const sum = accounts.reduce((acc,curr)=>acc+curr.balance,0);
    return sum/accounts.length;
}

export function sumBalance(){
    return accounts.reduce((acc,curr)=>acc+curr.balance,0);
}

export function distributeBenefit(benefitPercentage){
    accounts.map((account)=>account.balance+=account.balance*benefitPercentage);
}

export function deductFee(monthlyFee){
    accounts.map((account)=> account.balance-=monthlyFee);
}

export function toJson(){ //Used to transfer files like this.
    return JSON.stringify(accounts);
}

export function fromJson(accountJSON){
    return JSON.parse(accountJSON)
};