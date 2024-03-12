/** @format */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "f8alas9q",
		dataset: "production",
		useCdn: false,
	});
	const query = `*[_type == "blog"][0...3]`;
	const blogs = await client.fetch(query);

	return {
		props: {
			blogs,
		},
	};
}
export default function Home({ blogs }) {
	const client = createClient({
		projectId: "f8alas9q",
		dataset: "production",
		useCdn: false,
	});

	const builder = imageUrlBuilder(client);
	return (
		<>
			<Head>
				<title>The Hunting Coder</title>
				<meta
					name="description"
					content="Hey there, code adventurers! Ready to embark on an epic quest through the digital universe? Welcome to Hunting Coder, your ultimate hideout for tech tales, coding conquests, and a bit of digital magic."
				/>
				<link rel="icon" href="/favicon.png" type="image/x-icon" />
				<meta
					property="og:image"
					content="https://ik.imagekit.io/chaitanya/homeimg.jpg?updatedAt=1704036119381"
				/>
			</Head>

			<div className={styles.about}>
				<h1>About us </h1>
				<p>
					Hey there, code adventurers! Ready to embark on an epic quest through
					the digital universe? Welcome to Hunting Coder, your ultimate hideout
					for tech tales, coding conquests, and a bit of digital magic. Picture
					this: a space where algorithms dance and pixels tell stories. Whether
					you're a code ninja or just peeking into the tech realm, our blog is
					your treasure map to geek out on all things programming. Buckle up,
					because we're diving into a world where coding meets creativity, and
					debugging becomes an epic adventure. Let's hunt down knowledge and
					code with a sprinkle of fun—because tech is not just a language; it's
					a whole universe waiting to be explored!
				</p>
				<br />
				<br />
				<Image
					className={styles.image}
					src="/homeimg.jpg"
					width={427}
					height={366}></Image>
			</div>
			<div className={styles.domains}>
				<h1>Our Domains</h1>
				<div className={styles.domlinks}>
					<ul>
						<Link className={styles.link} href="">
							<li style={{ color: "#E85A5A" }}>#webdev</li>
						</Link>
						<Link className={styles.link} href="">
							<li style={{ color: "#E8AF5A" }}>#iot</li>
						</Link>
						<Link className={styles.link} href="">
							<li style={{ color: "#5ae8e8" }}>#ml</li>
						</Link>
						<Link className={styles.link} href="">
							<li style={{ color: "#7FE85A" }}>#cprogramming</li>
						</Link>
						<Link className={styles.link} href="">
							<li style={{ color: "#E8AF5A" }}>#robotics</li>
						</Link>
					</ul>
				</div>
			</div>
			<h1 className={styles.blog}>From the Blog</h1>
			<div className={styles.bd}>
				{Array.isArray(blogs) && blogs.length > 0 ? (
					blogs.map((item) => (
						<div>
							<div className={styles.blogcard}>
								<img
									className={styles.blogimg}
									src={builder.image(item.blogimage).width(200).url()}
								/>
								<h2 className={styles.blogtitle}>{item.title}</h2>
								<p className={styles.blogpara}>{item.metadesc}</p>
								<Link
									key={item.slug.current}
									href={"/blog/" + item.slug.current}>
									Read More
								</Link>
							</div>
						</div>
					))
				) : (
					<p>No blogs available</p>
				)}
			</div>
		</>
	);
}
