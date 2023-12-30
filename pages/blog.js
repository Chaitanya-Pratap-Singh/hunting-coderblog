// YourComponent.js
import React, { useEffect, useState } from 'react';
import client from '@/lib/sanity'; // Adjust the path accordingly

const Blog = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.fetch('*[_type == "blog"]'); // Adjust the query
        setContent(response); // Set the fetched content to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Render content once fetched
  return (
    <div>
      {content && (
        <ul>
          {content.map((item) => (
            <li key={item._id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
