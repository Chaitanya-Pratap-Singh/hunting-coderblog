// pages/contact.js

import React from 'react';
import styles from '@/styles/Home.module.css'; 
const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.para}>
        Have questions, suggestions, or just want to say hello? We'd love to hear from you!
        Feel free to reach out using the contact details below.
      </p>

      <div className={styles.contactInfo}>
        <h2 className={styles.title}>Contact Information</h2>
        <p className={styles.para}>
          <strong>Email:</strong> contact@huntingcoder.com
        </p>
        <p className={styles.para}>
          <strong>Phone:</strong> +1 234 567 8901
        </p>
        <p className={styles.para}>
          <strong>Address:</strong> 123 Coding Street, Techville
        </p>
        
      </div>

      {/* Embedded Map */}
      <div className={styles.mapContainer}>
        <iframe
          title="Map"
          width="400"
          height="400"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767217.76788454!2d60.944588889743954!3d19.722674057189707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1703940039344!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
