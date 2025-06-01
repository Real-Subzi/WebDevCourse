'use client' //because we have onChange
import {React,useState} from 'react'; //if you use any hooks, then it becomes client component also.
import styles from '@/app/page.module.css';
import Account from '@/app/accounts/Account.jsx' //Import the component

export default function Accounts({initialAccounts}){ //props means properties (doesn't mean anything). To destructure, we could've replaced with {accounts,x,y}
    const[accounts,setAccount]=useState(initialAccounts)  

    async function handleLoadAccounts(type){
        const url = `http://localhost:3000/api/accounts?type=${type}`
        const res = await fetch(url); //fetch url
        const data = await res.json(); //parse data into json.
        setAccount(data)
    }


    return <>
        <label for="acctType">
            Account Type
        </label>
        <select id="acctType" onChange={e=>handleLoadAccounts(e.target.value)} className={styles.filterDropdown}>
            <option value="All">All</option>
            <option value="Saving">Saving</option>
            <option value="Current">Current</option>
        </select>
        <table className={styles.table}>
            <thead> {/*thead and tbody gets rid of the hydration error*/}
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>Image</th>
                    <th>Account No</th>
                    <th>Account Type</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account)=> <Account account={account}></Account>)}
            </tbody>
        </table>
    </>
}