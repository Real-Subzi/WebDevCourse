import React from 'react'
import styles from '@/app/page.module.css'
import Link from 'next/link'


export default async function Book({bookItem,onDelete}) {

  return (
    
        <li className={styles.cardsItem}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={bookItem.thumbnailUrl} alt=""/>
                <div className={styles.cardContent}>
                    <div id="book-title" className={styles.cardTitle}>{bookItem.title}</div>
                    <p id="book-desc" className={styles.cardText}>{bookItem.shortDescription}
                    </p>
                    <div className={styles.btnOptions}>
                    <Link href={{pathname:'/books/isbn',query:bookItem}}><button className={`${styles.btn} ${styles.btnDetails}`}>Details</button></Link>
                        <button className={`${styles.btn} ${styles.btnUpdate}`}>Update</button>
                        <button className={`${styles.btn} ${styles.btnDelete}`} onClick={e=>onDelete(bookItem.isbn)}>Delete</button>
                    </div>
                </div>
            </div>
        </li>
    
  )
}
