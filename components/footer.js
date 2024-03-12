import React from 'react'
import Link from 'next/link';
import styles from "@/styles/footer.module.css"

const Footer = () => {
    const current_year = new Date().getFullYear();
    return (
      <div className={styles.footer}>
        <div className={styles.footerlink}>
          <Link href="https://1manstartup.com/privacy-policy" target="_blank" className={styles.link}>
            Privacy
          </Link>
          <span>|</span>
          <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className={styles.link}>
            Terms
          </Link>
          <span>|</span>
          <Link href="mailto:chaitanyapratapsingh24@gmail.com>" className={styles.link}>
            Mail
          </Link>
        </div>
          <p className={styles.copy}>Copyright © {current_year}, Hunting Coder LLC. All Rights Reserved.</p>
      </div>
    );
  }


export default Footer;