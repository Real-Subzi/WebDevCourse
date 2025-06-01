import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({
                data: owner
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async getAccounts(acctType) {
        try {
            if (!acctType || acctType == "All") {
                return prisma.account.findMany()
            } else {
                return prisma.account.findMany({
                    where: {
                        acctType
                    }
                })
            }
        } catch (error) {
            return {
                error: error.message
            }
        }

    }
    async addAccount(account) {
        try {
            return prisma.account.create({
                data: account
            })
        } catch (error) {
            return {
                error: error.message
            }
        }

    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update({
                data: account,
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findFirst({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async searchOwner(name) {
        try {
            return prisma.owner.findMany({
                where: {
                    OR: [
                        { firstname: { contains: name } },
                        { lastname: { contains: name } },
                    ]
                }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany({
                where: { accountNo: accountNo }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());
        //1. find the account you want to add the transaction to
        //2. check if it is withdraw or deposit
        //3. if deposit just add the money
        //4. if withdraw check if the balance is enough
        //5. if enough then deduct the money
        //6. if not enough then return insufficient funds
        //7. update the account
        //8. add the transaction
        const account = await this.getAccount(accountNo)
        if (transaction.transType == "Deposit") {
            account.balance += transaction.amount
        } else {
            if (account.balance >= transaction.amount) {
                account.balance -= transaction.amount
            } else {
                return { error: "Insufficient funds" }
            }
        }
        await this.updateAccount(accountNo, account)
        return prisma.transaction.create({
            data: transaction
        })

    }
    // Aggregations 
    async getMinAndMaxBalance() {
        try {
            return prisma.account.aggregate({
                _max: { balance: true },
                _min: { balance: true },
                _avg: { balance: true },
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    getTop3Accounts() {
        //top three , orderby and take
        try {
            return prisma.account.aggregate({
                orderBy: { balance: "desc" },
                take: 3
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }
    getTransSum(accountNo, fromDate, toDate) {
        try {
            return prisma.transaction.aggregate({
                where: {
                    accountNo: accountNo,
                    date: {
                        gt: new Date(fromDate).toISOString,
                        lt: new Date(toDate).toISOString
                    }
                },
                by: ["transType"],
                _sum: { amount: true }
            })
        } catch (error) {
            return {
                error: error.message
            }
        }
    }

}

export default new AccountsRepo()