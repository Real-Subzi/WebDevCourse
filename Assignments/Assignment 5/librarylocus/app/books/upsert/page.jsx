import React from 'react'
import styles from '@/app/page.module.css'
export default function page() {
  return (
    <>
      <body className={styles.body}>
        <div className={styles.mainContent}>
          <br />
          <h1 align="center" id={styles.pageTitle}>
            Add Book
          </h1>
          <form id={styles.bookEditorForm}>
            <div className={styles.formGroup}>
              <label for="">Title </label>
              <input
                type="text"
                className={styles.formControl}
                name="name"
                id="name"
                placeholder=""
              />
            </div>
            <div className={styles.formGroup}>
              <label for="isbn">ISBN </label>
              <input
                type="text"
                className={styles.formControl}
                name="isbn"
                id="isbn"
                placeholder="isbn"
              />
            </div>
            <div className={styles.formGroup}>
              <label for="pageCount">Page Count</label>
              <input
                type="number"
                className={styles.formControl}
                name="pageCount"
                id="pageCount"
                placeholder="page count"
              />
            </div>
            <div className={styles.formGroup}>
              <label for="pageCount">Published Date</label>
              <input
                type="date"
                className={styles.formControl}
                name="publishedDate"
                id="publishedDate"
              />
            </div>
            <div className={styles.formGroup}>
              <label for="thumbnailUrl">thumbnailUrl</label>
              <input
                type="url"
                className={styles.formControl}
                name="thumbnailUrl"
                id="thumbnailUrl"
              />
            </div>
            <div className={styles.formGroup}>
              <label for="">Short Description </label>
              <textarea
                className={styles.formControl}
                name="shortDescription"
                id="shortDescription"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label for="longDescription">Long Description</label>
              <textarea
                className={styles.formControl}
                name="longDescription"
                id="longDescription"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label for="">Book Status</label>
              <select className={styles.formControl} name="status" id="status">
                <option>REVIEW</option>
                <option>PUBLISH</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label for="authors">Authors</label>
              <textarea
                type="text"
                className={styles.formControl}
                name="authors"
                id="authors"
                size="50"
                placeholder="Separate them by Comma"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <label for="categories">Categories</label>
              <textarea
                type="text"
                className={styles.formControl}
                name="categories"
                id="categories"
                placeholder="Separate them by Comma"
              ></textarea>
            </div>
            <div className={styles.formGroup}>
              <input
                type="submit"
                className={`${styles.inputBtn} ${styles.btn}`}
                onclick="handleAddBook(event)"
              />
            </div>
          </form>
        </div>
      </body>
    </>
  );
}
