// pages/about.js

import React from 'react';
import styles from '@/styles/Home.module.css'; // Import your CSS module

const About = () => {
  return (
    <div>
      <section className={styles.aboutHeader}>
        <h1 className={styles.title}>Welcome to Hunting Coder!</h1>
        <p className={styles.para}>
          Welcome to Hunting Coder, the ultimate hub for exploring the realms of programming and technology!
          Our platform merges the eloquence of language with the precision of code, offering a vast spectrum
          of insights, guides, and discoveries.
        </p>
        <p className={styles.para}>
          Whether you're a seasoned developer or just stepping into the world of coding, our blog is designed
          to be your guiding star through the ever-evolving landscape of tech.
        </p>
      </section>

      <section className={styles.aboutMain}>
        <h2 className={styles.title}>Embark on a Journey</h2>
        <p className={styles.para}>
          At Hunting Coder, we aim to ignite your curiosity and passion for technology. Join us as we unravel
          the mysteries of algorithms, celebrate the elegance of code, and explore the innovations shaping
          our digital future.
        </p>

        <h2 className={styles.title}>Our Mission</h2>
        <p className={styles.para}>
          Our mission is to democratize technology education and make it accessible to everyone. We believe
          that knowledge should be shared freely, and through our articles, tutorials, and resources, we strive
          to empower individuals from diverse backgrounds to thrive in the world of programming.
        </p>

        <h2 className={styles.title}>Connect with Us</h2>
        <p className={styles.para}>
          We love to connect with our community! Follow us on social media for updates, tech news, and more.
          For any inquiries, collaborations, or suggestions, feel free to reach out to us at
          contact@huntingcoder.com.
        </p>
      </section>
    </div>
  );
};

export default About;
