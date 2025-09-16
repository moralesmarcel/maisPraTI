import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © 2025 <a className={styles.footerLink} href="https://github.com/moralesmarcel" target="_blank" rel="noopener noreferrer">Marcel Morales</a>
    </footer>
  );
}
