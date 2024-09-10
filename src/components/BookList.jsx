import { useState } from "react";
import Book from "./Book";

const BookList = () => {
  const [books] = useState([
    {
      image: "https://m.media-amazon.com/images/I/718SstStV3L._AC_UF1000,1000_QL80_.jpg",
      title: "Interesting Facts",
      author: "Jordan Moore",
    },
    {
      image: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg",
      title: "Atomic Habits",
      author: "James Clear",
    },
    {
      image: "https://media.s-bol.com/Wpzr8Rz7LBEE/mO13Dy3/540x840.jpg",
      title: "Fairy Tale",
      author: "Stephen King",
    },
  ]);

  return (
    <>
      {books.map((book) => (
        <Book
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
};

export default BookList;