import React from 'react'
import styles from '@/app/page.module.css'

export default function BookForm() {
  return (
    
        <form id={styles.searchForm}>
                <div id={styles.bookFilters}>
                    
                    <h3><br/>Select Search Criteria</h3>
                    <div></div>
                    <div id={styles.searchOptions}>
                        <div className={styles.formGroup}>
                            <input type="radio" id="category" name="search" onclick value="category" className={styles.inputPlace}/>
                            <label for="category" className={styles.labels}>Category</label>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="radio" id="name" name="search" onclick value="name" className={styles.inputPlace}/>
                            <label for="name" className={styles.labels}>Book Name</label>
                        </div>
                        <div className="author">
                            <input type="radio" id="author" name="search" onclick value="author" className={styles.inputPlace}/>
                            <label for="author" className={styles.labels}>Author Name</label>
                        </div>
                        <div className="isbn">
                            <input type="radio" id="isbn" name="search" onclick value="isbn" className={styles.inputPlace}/>
                            <label for="isbn" className={styles.labels}>ISBN</label>
                        </div>
                        <div className="pageCount">
                            <input type="radio" id="pageCount" name="search" onclick value="pageCount" className={styles.inputPlace}/>
                            <label for="pageCount" className={styles.labels}>Page Count</label>
                        </div>
                    </div>

                    <input list="list" name="searchValue" placeholder="Search By Categories" id={styles.searchBox} className={styles.inputPlace}/>
                    <input type="button" value="Search" id={styles.searchBtn} onclick="handleBookSearch(event)" className={`${styles.inputPlace} ${styles.inputBtn}`}/>
                </div>
        </form>
  )
}
