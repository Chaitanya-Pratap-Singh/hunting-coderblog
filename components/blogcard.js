/** @format */

import styles from "@/styles/blogcard.module.css";
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from "@/lib/sanity";



const BlogCard = ({ title, description, readMoreLink, blogimage }) => {
	return (
		<div className={styles.blogcard}>
			<img
				className={styles.blogimg}
				src="https://ik.imagekit.io/chaitanya/ad6fa7d8a14fcd9a4643249272a3ca8d.png?updatedAt=1703856424898"
			/>
			<h2 className={styles.blogtitle}>{title}</h2>
			<p className={styles.blogpara}>{description}</p>
			<a className={styles.bloglink} href={readMoreLink}>
				Read More
			</a>
		</div>
	);
};

export default BlogCard;
