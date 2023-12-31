/** @format */

import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/styles/Home.module.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<h1 className={styles.title}>The Hunting Coder</h1>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
