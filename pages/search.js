import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css"
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "f8alas9q",
        dataset: "production",
        useCdn: false
    });
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);

    return {
        props: {
            blogs
        }
    }
}

export default function SearchPage({ blogs }) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const client = createClient({
        projectId: "f8alas9q",
        dataset: "production",
        useCdn: false,
    });

    const builder = imageUrlBuilder(client);

    useEffect(() => {
        if (router.query.q && Array.isArray(blogs)) {
            setSearchQuery(router.query.q);

			const filteredResults = blogs.filter((item) =>
			item.title.toLowerCase().includes(router.query.q.toLowerCase()) ||
			item.metadesc.toLowerCase().includes(router.query.q.toLowerCase())
		);
            setSearchResults(filteredResults);
        }
    }, [router.query.q, blogs]);

    return (
        <div>
            <h1 className={styles.searchtitle}>Search Results for "{searchQuery}"</h1>
            <div className={styles.bd}>
                {Array.isArray(searchResults) && searchResults.length > 0 ? (
                    searchResults.map((item) => (
                        <div key={item._id}>
                            <div className={styles.blogcard}>
                                <img
                                    className={styles.blogimg}
                                    src={builder.image(item.blogimage).width(200).url()}
                                    alt={item.title}
                                />
                                <h2 className={styles.blogtitle}>{item.title}</h2>
                                <p className={styles.blogpara}>{item.metadesc}</p>
                                <Link href={"/blog/" + item.slug.current}>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No matching blogs found</p>
                )}
            </div>
        </div>
    );
};
