import BooksRepo from "./repo/BooksRepo";
import styles from "@/app/page.module.css";
import Books from "@/app/books/Books.jsx"


export default async function Home() {
  const books = await BooksRepo.getBooks()



  return (
    <>
      <div id={styles.mainContent}>
        <Books initialBooks={books}></Books>
      </div>
    </>
  )
}
