'use client'
import React from 'react'
import styles from '@/app/page.module.css'
import { useRouter,useSearchParams } from 'next/navigation'

export default function page() {
    const searchParams = useSearchParams();
    const book = Object.fromEntries(searchParams);

    const router = useRouter();

    async function handleDeleteBook(isbn){
        
        const url = `/api/books/${isbn}`
        const response = await fetch(url,{method: 'DELETE'})
        router.push('/')
        router.refresh();
        console.log('I was called')
    }

  return (
    <>
    <main>
    <div id={styles.mainContent}>
    <li className={styles.cardsItem} id={styles.card}>
        <div className={styles.card}>
            <img className={styles.cardImage} src={book.thumbnailUrl} alt=""/>
            <div className={styles.cardContent}>
                <div id={styles.bookTitle} className={styles.cardTitle}>{book.title}</div>
                 <p id={styles.bookDesc} className={styles.cardText}>{book.shortDescription ? book.longDescription.trim() : `Not
                  Available`}</p>
                 <div className={styles.btnOptions}>
                    <button className={`${styles.btn} ${styles.btnUpdate}`} onclick="handleUpdateBook(${book.isbn})">Update</button>
                    <button className={`${styles.btn} ${styles.btnDelete}`} onClick={e=>handleDeleteBook(book.isbn)}>Delete</button>
                </div>
            </div>
        </div>
    </li>
    </div>
    </main>
    </>
  )
}
