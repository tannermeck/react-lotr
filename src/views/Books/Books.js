import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const books = await fetchBooks();
      console.log(books);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>Books</h1>
    </>
  );
}
