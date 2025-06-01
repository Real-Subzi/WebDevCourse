'use client'
import {React, useState} from "react";
import styles from '@/app/page.module.css'
import {useRouter,useSearchParams} from 'next/navigation'

export default function page() {
    const searchParams = useSearchParams();
    const [account, setAccount] = useState({})
    const router = useRouter()
    
    function handleChange(e){
        const newAccount = {...account} //this will extract the data, do not do equality as that will equal the references
        newAccount[e.target.name] = e.target.value; //create properties on the fly.
        setAccount(newAccount)
    }

    async function handleSubmit(e){
        e.preventDefault();
        const url = '/api/accounts'
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        
            },
            body: JSON.stringify(account)
        })
        router.push('/')
    }

  return (
    <>
        {JSON.stringify(account)}
      <h3 className={styles.title}>Add Account</h3>
      <form id="account-form" className={styles.form} onSubmit={e=>handleSubmit(e)}>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" onChange={handleChange}/>

        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lastname" onChange={handleChange}/>

        <label htmlFor="acctType">Account Type</label>
        <select name="acctType" id="acctType" required onChange={handleChange}>
          <option value=""></option>
          <option value="Saving">Saving</option>
          <option value="Current">Current</option>
        </select>

        <label htmlFor="balance">Balance</label>
        <input type="number" name="balance" id="balance" required onChange={handleChange}/>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange}/>

        <label htmlFor="dateOpened">Date Opened</label>
        <input type="date" name="dateOpened" id="dateOpened" onChange={handleChange}/>

        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender" required onChange={handleChange}>
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="profileImage">Profile Image URL</label>
        <input type="url" name="profileImage" id="profileImage" onChange={handleChange}/>

        <button type="Submit">Submit</button>
      </form>
    </>
  );
}
