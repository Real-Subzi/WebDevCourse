import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({data:owner})
        } catch (error) {
            return {error: error.message}
        }
    }
    async getOwners() {
        try {
            return prisma.owner.findMany();
        } catch (error) {
            return {error: error.message}
        }
    }
    async getAccounts(acctType) {
        try {
            if(acctType=="All" || !acctType){
                return prisma.account.findMany({
                    include : {
                        Owner : true
                    }
                });
            }
                return prisma.account.findMany({
                    where:{
                        acctType:acctType
                    },
                    include: {
                        Owner: true
                    }
                })
                
        } catch (error) {
            return {error: error.message}
        }
    }
    async addAccount(account) {
        try {
            return prisma.account.create(account);
        } catch (error) {
            return {error: error.message}
        }
    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update(
                {data: account},
                {where: {accountNo}}
            )
        } catch (error) {
            return {error: error.message}
        }
    }

    async getAccount(accountNo) {
        try{
            return prisma.account.findUnique(
                {where : {accountNo:accountNo}}
            )
        }catch{
            return {error: error.message};
        }
    }
    async searchOwner(name) {
        try {
            prisma.owner.findMany(
                {where: {OR: [
                    {firstname:name},
                    {lastname:name}
                ]}}
            )
        } catch (error) {
            return {error: error.message};
        }
    }

    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete(
                {where: {accountNo:accountNo}}
            )
        } catch (error) {
            return {error: error.message};
        }
    }
    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany({
                where: {accountNo}
            })
        } catch (error) {
            return {error: error.message};
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        // transaction.accountNo = accountNo
        // transaction.amount = parseInt(transaction.amount.toString());

        // const account = await this.getAccount(accountNo)
        // if (transaction.ty)
    }
    // Aggregations 
    async getMinAndMaxBalance() {

    }
    getTop3Accounts() {

    }
    getTransSum(accountNo, fromDate, toDate) {

    }

}

export default new AccountsRepo()