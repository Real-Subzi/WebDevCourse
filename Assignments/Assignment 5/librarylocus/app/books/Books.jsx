'use client'
import {React,useState} from 'react'
import styles from '@/app/page.module.css'
import Book from "@/app/books/Book.jsx"


export default function Books({initialBooks}) {
    let URL;
    const [books,setBooks] = useState(initialBooks)
    const [filterType,setfilterType] = useState("")
    const [SearchParameters,setParameters] = useState("")

    async function handleLoadListValues(type){
        setfilterType(type)
    }
    async function handleSearchChange(searchval){
        setParameters(searchval)
    }
    async function handleBookSearch(){
        URL = `/api/books?${filterType}=${SearchParameters}`;
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data)
    }

    async function handleDeleteBook(isbn){
        const url = `/api/books/${isbn}`
        const response = await fetch(url,{method: 'DELETE'})
        handleBookSearch()
    }

  return (
    <>
        <form id={styles.searchForm}>
                <div id={styles.bookFilters}>
                    
                    <h3><br/>Select Search Criteria</h3>
                    <div></div>
                    <div id={styles.searchOptions}>
                        <div className={styles.formGroup}>
                            <input type="radio" id="category" name="search" onClick={e=>handleLoadListValues(e.target.value)} value="category" className={styles.inputPlace}/>
                            <label for="category" className={styles.labels}>Category</label>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="radio" id="name" name="search" onClick={e=>handleLoadListValues(e.target.value)} value="name" className={styles.inputPlace}/>
                            <label for="name" className={styles.labels}>Book Name</label>
                        </div>
                        <div className="author">
                            <input type="radio" id="author" name="search" onClick={e=>handleLoadListValues(e.target.value)} value="author" className={styles.inputPlace}/>
                            <label for="author" className={styles.labels}>Author Name</label>
                        </div>
                        <div className="isbn">
                            <input type="radio" id="isbn" name="search" onClick={e=>handleLoadListValues(e.target.value)} value="isbn" className={styles.inputPlace}/>
                            <label for="isbn" className={styles.labels}>ISBN</label>
                        </div>
                        <div className="pageCount">
                            <input type="radio" id="pageCount" name="search" onClick={e=>handleLoadListValues(e.target.value)} value="pageCount" className={styles.inputPlace}/>
                            <label for="pageCount" className={styles.labels}>Page Count</label>
                        </div>
                    </div>

                    <input list="list" name="searchValue" placeholder="Search By Categories" id={styles.searchBox} className={styles.inputPlace} onChange={e=>handleSearchChange(e.target.value)}/>
                    <input type="button" value="Search" id={styles.searchBtn} onClick={e=>handleBookSearch()} className={`${styles.inputPlace} ${styles.inputBtn}`}/>
                </div>
        </form>



        <ul id="bookCards" className={styles.cards}>
            {
                books.map((book)=><Book bookItem={book} onDelete={handleDeleteBook}></Book>)
            }
        </ul>
    </>
  )
}
