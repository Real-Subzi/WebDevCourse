// npm init
const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: 'saving'
    },
    {
        accountNo: 234,
        balance: 4000,
        type: 'current'
    },
    {
        accountNo: 345,
        balance: 35000,
        type: 'current'
    },
    {
        accountNo: 456,
        balance: 60000,
        type: 'saving'
    }
]

export function addAccount(account) {
    accounts.push(account)
}

export function getAccounts() {
    return accounts
}

export function withdraw(accountNo, amount) {
    const index = accounts.findIndex(account => account.accountNo === accountNo)
    if (index < 0) console.log('account not found');
    else if (accounts[index].balance < amount) console.log('insufficient balance');
    else accounts[index].balance -= amount
}

export function deposit(accountNo, amount) {
    const index = accounts.findIndex(account => account.accountNo === accountNo)
    if (index < 0) console.log('account not found');
    else if (amount >= 0) accounts[index].balance += amount
}

export function deleteAccount(accountNo) {
    const index = accounts.findIndex(account => account.accountNo === accountNo)
    if (index < 0) console.log('account not found');
    else accounts.splice(index, 1)
}

export function sumBalance() {
    return accounts.reduce((acc, curr) => acc + curr.balance, 0)
}
export function averageBalance() {
    return sumBalance() / accounts.length
}

export function convertFromUSToQAR(amount) {
    return amount * 3.65;
}

