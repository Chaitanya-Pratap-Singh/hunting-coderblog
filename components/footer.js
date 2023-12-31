import React from 'react'
import Link from 'next/link';
import styles from "@/styles/footer.module.css"

const Footer = () => {
    const current_year = new Date().getFullYear();
    return (
      <div className={styles.footer}>
        <div className={styles.footerlink}>
          <Link href="#" target="_blank" className={styles.link}>
            Privacy
          </Link>
          <span>|</span>
          <Link href="#" target="_blank" className={styles.link}>
            Terms
          </Link>
          <span>|</span>
          <Link href="mailto:chaitanyapratapsingh24@gmail.com>" className={styles.link}>
            Mail
          </Link>
        </div>
          <p style={{ textAlign: "center" }} className={styles.copy}>Copyright © {current_year}, Hunting Coder LLC. All Rights Reserved.
          <br />
          Made with 💖 by <a href="https://github.com/Chaitanya-Pratap-Singh">Chaitanya</a>
          </p>
      </div>
    );
  }


export default Footer;