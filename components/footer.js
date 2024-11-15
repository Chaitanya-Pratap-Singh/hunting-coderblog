import React from 'react'
import Link from 'next/link';
import styles from "@/styles/footer.module.css"

const Footer = () => {
    const current_year = new Date().getFullYear();
    return (
      <div className={styles.footer}>
        <div className={styles.footerlink}>
<<<<<<< HEAD
          <Link href="https://1manstartup.com/privacy-policy" target="_blank" className={styles.link}>
            Privacy
          </Link>
          <span>|</span>
          <Link href="https://1manstartup.com/terms-and-conditions" target="_blank" className={styles.link}>
=======
          <Link href="#" target="_blank" className={styles.link}>
            Privacy
          </Link>
          <span>|</span>
          <Link href="#" target="_blank" className={styles.link}>
>>>>>>> secondary/main
            Terms
          </Link>
          <span>|</span>
          <Link href="mailto:chaitanyapratapsingh24@gmail.com>" className={styles.link}>
            Mail
          </Link>
        </div>
<<<<<<< HEAD
          <p className={styles.copy}>Copyright © {current_year}, Hunting Coder LLC. All Rights Reserved.</p>
=======
          <p style={{ textAlign: "center" }} className={styles.copy}>Copyright © {current_year}, Hunting Coder LLC. All Rights Reserved.
          <br />
          Made with 💖 by <a href="https://github.com/Chaitanya-Pratap-Singh">Chaitanya</a>
          </p>
>>>>>>> secondary/main
      </div>
    );
  }


export default Footer;