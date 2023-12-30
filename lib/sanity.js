// sanity.js
import sanityClient from '@sanity/client';

export const getClient = () => {
  const client = sanityClient({
    projectId: 'f8alas9q',
    dataset: 'production',
    useCdn: true,
  });

  return client;
};


