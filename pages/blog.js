/** @format */
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/blog.module.css";
import Link from "next/link";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { getClient } from "@/lib/sanity";

export async function getServerSideProps(context) {
	const client = createClient({
		projectId: "f8alas9q",
		dataset: "production",
		useCdn: false,
	});
	const query = `*[_type == "blog"]`;
	const blogs = await client.fetch(query);

	return {
		props: {
			blogs,
		},
	};
}
export default function Blog({ blogs }) {
	const client = createClient({
		projectId: "f8alas9q",
		dataset: "production",
		useCdn: false,
	});

	const builder = imageUrlBuilder(client);
	return (
		<>
			<h1 className={styles.blog}>Explore Our Coding Chronicles</h1>
			<p className={styles.about}>
				Welcome to the treasure trove of knowledge and innovation! Below is a
				curated collection of our blog posts, each a unique journey into the
				world of programming, technology, and the digital sphere. Grab your
				virtual gear and embark on these adventures:
			</p>
			<div className={styles.bd}>
				{Array.isArray(blogs) && blogs.length > 0 ? (
					blogs.map((item) => (
						<div>
							<a
								style={{ textDecoration: "none" }}
								key={item.slug.current}
								href={"/blog/" + item.slug.current}>
								<div className={styles.blogcard}>
									<h2 className={styles.blogtitle}>{item.title}</h2>
									<div className={styles.blogcontainer}>
										<div className="images">
											<img
												className={styles.blogimg}
												src={builder.image(item.blogimage).width(200).url()}
											/>
										</div>
										<div className="text">
											<p className={styles.blogpara}>{item.metadesc}</p>
										</div>
									</div>
								</div>
							</a>
						</div>
					))
				) : (
					<p>No blogs available</p>
				)}
			</div>
		</>
	);
}
