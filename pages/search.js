import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q);
      // Perform search or fetch data based on the query
      // Here, searchData is assumed to be an array of objects representing blog posts
      const searchData = []; // Replace this with your actual data fetching logic
      const results = searchData.filter(item =>
        item.title.toLowerCase().includes(router.query.q.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [router.query.q]);

  return (
    <div>
      <h1>Search Results for "{searchQuery}"</h1>
      <ul>
        {searchResults.map(result => (
          <li key={result.slug}>
            <h2>{result.title}</h2>
            <p>{result.blogImage}</p>
            {/* Add other relevant information here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
