import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Accounts from '@/app/accounts/Accounts.jsx' //we made the Accounts page into a component by renaming it
import accountsRepo from '@/app/repo/accounts-repo.js';

export default async function Home() {
  const accounts = await accountsRepo.getAccounts();
  // we will get the data
  // const accounts = 
  return (
    <div>
      <Accounts initialAccounts={accounts}></Accounts> {/* We used the account component*/};
    </div>
  )
}
