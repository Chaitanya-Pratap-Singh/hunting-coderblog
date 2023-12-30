// sanity.js
import { createClient } from "next-sanity";

export const getClient = () => {
  const client = createClient({
    projectId: 'f8alas9q',
    dataset: 'production',
    useCdn: true,
  });
  return client
};


