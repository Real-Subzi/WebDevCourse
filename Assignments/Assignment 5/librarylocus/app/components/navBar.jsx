import React from "react";
import styles from "@/app/page.module.css"
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.navbarToggle} id="jsNavbarToggle">
        <i class="fas fa-bars"></i>
      </span>

      <Link href="/" className={styles.logo}>
        Book Store
      </Link>

      <ul className={styles.mainNav} id={styles.jsMenu}>
        <li>
          <Link href="/index.html" className={styles.navLinks}>
            Books
          </Link>
        </li>
        <li>
          <Link href="/books/upsert" className={styles.navLinks}>
            Add Book
          </Link>
        </li>

        <li>
          <Link href="/books/summary" className={styles.navLinks}>
            Author Book Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
}
