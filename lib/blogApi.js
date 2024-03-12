import sanityClient from './sanity'; 

export async function getBlogPosts(searchQuery) {
  const query = `*[_type == "post" && (title match $query || metaDesc match $query)] {
    title,
    metaDesc,
    "slug": slug.current,
    "blogImage": mainImage.asset->url 
  }`;

  const params = { query: `*${searchQuery}*` }; // Search query parameter

  try {
    const results = await sanityClient.fetch(query, params);
    return results;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
