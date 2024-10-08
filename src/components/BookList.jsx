import { useState } from "react";
import Book from "./Book";
import data from '../../data'

const BookList = () => {
  const [books, setBooks] = useState(data);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const filteredBooks = data.filter((book) => 
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
    <div className='search'>
      <input 
      type="text"
      placeholder="Zoek een titel op"
      onChange={handleChange}
      value={searchInput}
      name="search"
       />
    </div>
      {filteredBooks.map((book) => (
        <Book
          key={book.id}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
};

export default BookList;