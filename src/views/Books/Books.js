import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const booksData = await fetchBooks();
      console.log(booksData);
      setBooks(booksData);
    };
    fetch();
  }, []);
  return (
    <>
      <h1>Books</h1>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </>
  );
}
