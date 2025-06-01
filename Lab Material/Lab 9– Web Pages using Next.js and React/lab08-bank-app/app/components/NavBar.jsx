import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'; //Link is faster than the a tag, so we replace it.

export default function NavBar() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/accounts/add">Add Account</Link></li>
            <li><Link href="/accounts/transaction">Transactions</Link></li>
        </ul>
    </nav>
  )
}
