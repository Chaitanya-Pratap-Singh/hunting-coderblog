import { createClient } from "next-sanity";
import Head from 'next/head';
import { PortableText } from "@portabletext/react"
import { useRouter } from 'next/router';
import imageUrlBuilder from "@sanity/image-url";
import { getClient } from '@/lib/sanity';
import styles from "@/styles/slug.module.css"

export async function getStaticPaths() {
  const client = getClient();
  const query = `*[_type == 'blog' && defined(slug.current)][].slug.current`; 
  const slugs = await client.fetch(query);

  const paths = slugs.map((slug) => ({
    params: { slug }, 
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { slug } = params;
  const client = getClient();
  try {
    const query = `*[_type == 'blog' && slug.current == $slug][0]{
      _id,
      title,
      content,
      metadesc,
      blogimage,
    }`;
    
    const blog = await client.fetch(query, { slug });

    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
  }
}

export default function Blog({ blog }) {
  const client = createClient({
		projectId: "f8alas9q",
		dataset: "production",
		useCdn: true,
	});
  if (!blog) {
    return <div>Loading...</div>;
  }

  
  
  const router = useRouter()
  const builder = imageUrlBuilder(client);
  return (
    <>
      <Head>
        <title >{blog.title}</title>
        <meta name="description" content={blog.metadesc} />
      </Head>
      <div>
    
        <h1  className={styles.title} >{blog.title}</h1>
        <img className={styles.image} src={builder.image(blog.blogimage).width(200).url()} alt={blog.blogimage.caption} />
        <div className={styles.contentcontainer}>
        <PortableText className ={styles.content} value={blog.content} />
        </div>
      </div>
    </>
  );
}