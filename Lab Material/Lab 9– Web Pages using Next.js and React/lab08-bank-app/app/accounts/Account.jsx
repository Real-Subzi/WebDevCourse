import React from 'react'
import styles from '@/app/page.module.css'

export default function Account(props) {//props to get each account from Accounts.jsx
  return (
    <>
        <tr>
            <td>{props.account.firstname}</td>
            <td>{props.account.lastname}</td>
            <td>{props.account.gender}</td>
            <td><img src={props.account.profileImage} className={styles.profilePic} alt=""></img></td>
            <td>{props.account.accountNo}</td>
            <td>{props.account.acctType}</td>
            <td>{props.account.balance}</td>
        </tr>
    </>
  )
}
